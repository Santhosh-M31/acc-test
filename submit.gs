// ─────────────────────────────────────────────────────────────────────────────
// Tec Solution Pro — Checklist Form Handler
// Deploy as: Extensions → Apps Script → Deploy → New deployment
//   Execute as: Me
//   Who has access: Anyone
// ─────────────────────────────────────────────────────────────────────────────

var TO_EMAIL = 'asim.tanweer@tecsolutiongroup.com';
var CC_EMAIL = 'msanthosh@tecsolutiongroup.com';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    logToSheet(data);
    sendEmail(data);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

// ── Sheet logging ─────────────────────────────────────────────────────────────
function logToSheet(data) {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var name  = data['_form'] || 'Submissions';
  var sheet = ss.getSheetByName(name) || ss.insertSheet(name);

  // Private fields (prefixed _) go last; timestamp always first
  var publicKeys  = Object.keys(data).filter(function(k) { return k.charAt(0) !== '_'; });
  var privateKeys = Object.keys(data).filter(function(k) { return k.charAt(0) === '_'; });
  var allKeys     = ['Timestamp'].concat(publicKeys).concat(privateKeys);

  if (sheet.getLastRow() === 0) {
    // First ever submission — write header row
    sheet.appendRow(allKeys);
    sheet.getRange(1, 1, 1, allKeys.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  } else {
    // Merge any new columns not yet in the header
    var existing = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var newCols  = allKeys.filter(function(k) { return existing.indexOf(k) === -1; });
    if (newCols.length) {
      newCols.forEach(function(k) { existing.push(k); });
      sheet.getRange(1, 1, 1, existing.length).setValues([existing]);
    }
    allKeys = existing;
  }

  var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
  var row = allKeys.map(function(k) {
    return k === 'Timestamp' ? timestamp : (data[k] !== undefined ? data[k] : '');
  });
  sheet.appendRow(row);
}

// ── Email ─────────────────────────────────────────────────────────────────────
function sendEmail(data) {
  var subject = data['_subject'] || 'Checklist Submission';
  var rows    = Object.keys(data)
    .filter(function(k) { return k.charAt(0) !== '_'; })
    .map(function(k) {
      return '<tr><td style="padding:4px 10px;font-weight:bold;background:#f5f5f5">' + k +
             '</td><td style="padding:4px 10px">' + data[k] + '</td></tr>';
    }).join('');

  var html = '<table border="1" cellpadding="0" cellspacing="0" ' +
             'style="border-collapse:collapse;font-family:sans-serif;font-size:13px">' +
             rows + '</table>';

  MailApp.sendEmail({ to: TO_EMAIL, cc: CC_EMAIL, subject: subject, htmlBody: html });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
