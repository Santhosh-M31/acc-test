# Drone Operations Checklists — Tec Solution Pro

Web-based pre-flight and post-flight checklists for drone survey operations, built for field teams using the **DJI Matrice 400** and **DJI Mavic 3 Multispectral** systems. Hosted on GitHub Pages — no app install required, works on any device with a browser.

**Live:** [https://santhosh-m31.github.io/acc-test/](https://santhosh-m31.github.io/acc-test/)

---

## Pages

| Page | URL | Purpose |
|---|---|---|
| Landing | `/` | Links to both checklists |
| Pre-Flight | `/pre-flight.html` | Complete before departure |
| Post-Flight | `/post-flight.html` | Complete after mission |

---

## Features

- **Sticky section headers** — stay visible while scrolling, showing live progress (e.g. `5 / 8`)
- **Form submission** — on submit, a full checklist record is emailed to the operations team
- **Mobile & desktop** — responsive layout, usable on phones in the field
- **Auto-populated date** — mission date defaults to today

---

## Pre-Flight Checklist Sections

| Section | Items Covered |
|---|---|
| DJI Matrice 400 — Drone Case | Aircraft, gimbal, propellers, remote controller, tools & storage |
| DJI Matrice 400 — Battery Station | Batteries (qty), charging cable, charge level verification |
| DJI Zenmuse L3 LiDAR Payload | Sensor, SD cards, storage check, protective cover |
| RTK / Survey Equipment | Base station, tripod, GNSS antennas & cables |
| Stationery | Field notebook, pens, markers |
| Transport & Field Equipment | Documents, safety gear, navigation devices, field setup, benzene generator |
| DJI Mavic 3 Multispectral System | Aircraft, controller, microSD cards, lens care |

## Post-Flight Checklist Sections

| Section | Items Covered |
|---|---|
| Drone (M400) | Power off, battery removed, propellers secured, covers installed, packed |
| Batteries & Station | All batteries collected, charger & power cables packed |
| LiDAR (L3) | Sensor, cables, SD card / data unit collected |
| RTK & Tripod | Base unit, antenna, tripod, cables packed |
| Controller & Devices | Remote controller & cables packed |
| Data | SD cards collected, data copied, quick file check |
| Miscellaneous | Landing pad, table & chairs, generator, hypsometer, GPS, laptop, power banks |
| Final Check | Nothing left on ground, all items back in cases |

---

## Mission Information Captured

Each submission records: pilot name, checked-by, mission date & time, province, site/grid reference, drone type, mission type, all checklist items, and remarks.

---

## Form Submissions

Responses are emailed via [Formsubmit.co](https://formsubmit.co) (no backend required):

- **Primary:** asim.tanweer@tecsolutiongroup.com
- **CC:** msanthosh@tecsolutiongroup.com
- **Subject:** `Pre-Flight Checklist — Site_01/Grid_01 | 2026-03-31`

> **First-time activation:** On the very first submission, Formsubmit will send a confirmation email to the primary address. Click "Confirm" to activate.

---

## Project Structure

```
acc-test/
├── index.html           # Landing page
├── pre-flight.html      # Pre-flight checklist
├── post-flight.html     # Post-flight checklist
├── css/
│   ├── checklist.css    # Shared styles (used by both checklists)
│   └── landing.css      # Landing page styles
├── js/
│   └── checklist.js     # Shared form logic (counters, submission)
└── tec_solution_pro_logo.jpg
```

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
