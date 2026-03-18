# Pre-Flight Checklist — Tec Solution Pro

A web-based pre-flight checklist for drone survey operations, built for field teams using the **DJI Matrice 400** and **DJI Mavic 3 Multispectral** systems. Hosted on GitHub Pages — no app install required, works on any device with a browser.

**Live:** [https://santhosh-m31.github.io/acc-test/](https://santhosh-m31.github.io/acc-test/)

---

## What It Does

- **Digital pre-flight verification** — guides the field team through every equipment check before leaving for a mission
- **Sticky section headers** — as you scroll through a section, its header stays visible at the top showing how many items have been checked (e.g. `5 / 8`)
- **Form submission** — on submit, a full record of the checklist is emailed to the operations team automatically
- **Works on mobile & desktop** — responsive layout, accessible on phones in the field

---

## Checklist Sections

| Section | Items Covered |
|---|---|
| DJI Matrice 400 — Drone Case | Aircraft, gimbal, propellers, remote controller, tools & storage |
| DJI Matrice 400 — Battery Station | Batteries (qty), charging cable, charge level verification |
| DJI Zenmuse L3 LiDAR Payload | Sensor, SD cards, storage check, protective cover |
| RTK / Survey Equipment | Base station, tripod, GNSS antennas & cables |
| Stationery | Field notebook, pens, markers |
| Transport & Field Equipment | Documents, safety gear, navigation devices, field setup, benzene generator |
| DJI Mavic 3 Multispectral System | Aircraft, controller, microSD cards, lens care |

---

## Mission Information Captured

Each submission records:

- Pilot name
- Checked by (team member)
- Mission date & start time
- Province (Saudi Arabia — all 13 regions)
- Site / Grid reference
- Drone type
- Mission type
- Battery quantity
- All checked / unchecked items
- Remarks / notes

---

## Form Submissions

Responses are emailed via [Formsubmit.co](https://formsubmit.co) (no backend required):

- **Primary:** asim.tanweer@tecsolutiongroup.com
- **CC:** msanthosh@tecsolutiongroup.com

Each email is formatted as a table with all mission details and checklist results.

> **First-time activation:** On the very first form submission, Formsubmit will send a confirmation email to the primary address. Click "Confirm" to activate — all future submissions will deliver automatically.

---

## Tech Stack

| | |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Hosting | GitHub Pages (free, static) |
| Form backend | Formsubmit.co (free, no server needed) |

---

## Local Development

```bash
git clone https://github.com/Santhosh-M31/acc-test.git
cd acc-test
# Open index.html in a browser — no build step required
```

---

*Tec Solution Pro — Drone Survey Operations*
