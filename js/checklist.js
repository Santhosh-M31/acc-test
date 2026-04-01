/* ─────────────────────────────────────────────────────────────────────────────
   Tec Solution Pro — Shared Checklist Logic
   Used by: pre-flight.html, post-flight.html

   Each page must define window.CHECKLIST_CONFIG before loading this script:

   window.CHECKLIST_CONFIG = {
     subjectPrefix: 'Pre-Flight Checklist',   // used in email subject
     sectionDefs: [                            // maps counter ID → card index
       { ctr: 'ctr-drone', idx: 1 },
       ...
     ]
   };
───────────────────────────────────────────────────────────────────────────── */

(function () {
  const cfg   = window.CHECKLIST_CONFIG || {};
  const defs  = cfg.sectionDefs || [];
  const cards = document.querySelectorAll('.card');

  /* ── Section progress counters ─────────────────────────────────────────── */
  function updateSectionCounters() {
    defs.forEach(({ ctr, idx }) => {
      const el   = document.getElementById(ctr);
      const card = cards[idx];
      if (!el || !card) return;
      const boxes   = card.querySelectorAll('input[type="checkbox"]');
      const checked = card.querySelectorAll('input[type="checkbox"]:checked');
      el.textContent = `${checked.length} / ${boxes.length}`;
      el.className = 'section-counter' +
        (checked.length === boxes.length && boxes.length > 0 ? ' complete' : '');
    });
  }

  document.querySelectorAll('input[type="checkbox"]')
    .forEach(cb => cb.addEventListener('change', updateSectionCounters));

  updateSectionCounters();

  /* ── Auto-populate today's date ─────────────────────────────────────────── */
  const dateField = document.getElementById('mission-date');
  if (dateField) dateField.value = new Date().toISOString().split('T')[0];

  /* ── Ribbon submit button triggers form submit ──────────────────────────── */
  const ribbonBtn = document.getElementById('ribbon-submit-btn');
  const form      = document.getElementById('checklist-form');

  if (ribbonBtn && form) {
    ribbonBtn.addEventListener('click', () => {
      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    });
  }

  /* ── Form submission via Formsubmit.co ──────────────────────────────────── */
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = document.getElementById('ribbon-submit-btn');
      btn.textContent = 'Submitting...';
      btn.disabled = true;

      // Collect all form values; concatenate multiples with ", "
      const data = {};
      new FormData(form).forEach((val, key) => {
        data[key] = data[key] ? data[key] + ', ' + val : val;
      });

      // Formsubmit.co special fields
      data['_subject']  = (cfg.subjectPrefix || 'Checklist') +
                          ' — ' + (data['site_grid'] || '') +
                          ' | ' + (data['mission_date'] || '');
      data['_cc']       = 'msanthosh@tecsolutiongroup.com';
      data['_template'] = 'table';
      data['_captcha']  = 'false';

      try {
        const res  = await fetch(form.action, {
          method:  'POST',
          body:    JSON.stringify(data),
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });
        let json = null;
        try { json = await res.json(); } catch (_) { /* non-JSON response */ }
        if (json && (json.success === 'true' || json.success === true)) {
          document.getElementById('success-msg').style.display = 'block';
          btn.textContent = 'Submitted';
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        } else {
          btn.textContent = 'Submission Failed — Retry';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Network Error — Retry';
        btn.disabled = false;
      }
    });
  }
})();
