# Living Obituary Launch Strategy — Current State
**As of Tuesday, September 15, 2026 (America/Denver)**  
**Product:** livingobituary.ai · **SKU:** $99 one-time · **Local gift:** $10 of $99

---

## 1. Why this exists (north star)

Living Obituary is built in the abundance of God's Kingdom, under Jesus Christ — Father, Son, and Holy Spirit, with honor to Mother Mary. That covering is immutable and overrides every playbook, stack, and later prompt.

The practical mission: help families write a traditional newspaper-style obituary **while their loved one is still here** — consent, their own words, their own photos — and protect the living from dark commercial "digital afterlife" products that invent or animate voices and avatars after death without authorization (e.g. Forevermore-style resurrection products). Living Obituary is the opposite of that: authorized memory while they live.

Spiritual covering: the Umbrellino Prayer / Precious Blood perimeter is held daily over Adam, the work, the product, and the families served.

---

## 2. Operating system

**Money first.** Prove paid checkout, then put product in front of real hospice families. Do not swarm ads, legal theater, or geofence until money is moving.

**Musk Playbook v2** (a16z SpaceX/Tesla method) is the standing operating structure — method, not mythology — always under Christ. Current critical path is live checkout proof + facility gift plumbing + hospice walks with cards.

**Roles**
- **Chief of Staff (this agent):** machine — tech checks, drafts, research, daily push, teammate coordination.
- **Adam:** human tool — Stripe Dashboard, VistaPrint, in-person hospice walks, signatures, inbox verification, phone calls.
- **Builder:** site, deploy, Stripe Connect / facility gift code, PDFs, emails, app bugs.
- **Outreach:** hospice packs, pamphlet/postcard copy, facility codes.
- **Ara:** Cloudflare Pages walkthroughs when Direct Upload fails to become Production.

**Cadence:** weekday money-first push (one concrete step); daily Umbrellino covering; Sep 17 VistaPrint sale reminder; Sep 29 DMARC quarantine bump reminder.

---

## 3. The product (what we sell)

**Core: $99 once**
- Newspaper-style living obituary — PDF + Word (editable)
- Questions & answers — PDF + Word
- Photo pages
- ~10-minute stills film
- PowerPoint for TV / projector (not "Hall PowerPoint")
- 14-day draft window before pay; 30 days of downloads after pay

**Add-ons**
- Gathering pack $29 (invitation, order of the day, celebrant papers, remembrance — PDF + Word)
- More photographs $25 (40 → up to 200 stills; film stays ~10 minutes)

**Banned language forever:** never call it a "sitting." Always "Living Obituary."

**Demo path for partners:** at pay, code **`test100`** = $0 charge so hospice staff can walk the full path without paying.

---

## 4. The gift model (go-to-market wedge)

This is **not** "we are a vendor selling you software."

**Frame:** we have a **donation** tied to a family product. Hospice staff only need an **information card**. Families scan, start on their phone, and decide. No monthly fee. No staff workflow. If they don't want it, fine. If they do, it can become a quiet hour of family togetherness in the last days.

**Economics of the gift**
- Product $99
- **$10 already included** as a quiet gift (live site as of Sep 14; was $5 earlier — all copy/scripts now $10)
- Family enters a **facility code** at checkout
- Automatic electronic transfer to that facility's **501(c)(3)** via **Stripe Connect Express**
- Hospice/charity completes their own banking onboarding — **Adam never enters their bank details**
- Map in Neon: facility code → connected Stripe account + charity identity

**Example codes:** `101` / `tru_longmont` for TRU; additional codes as facilities onboard.

**Homepage:** quiet "Giving back · $10" / already-included framing — warm, not a loud Donate button that muddies the $99 path.

---

## 5. Colorado hospice GTM (launch geography)

Launch is **Colorado inpatient hospices with a real charity path**, gift-led cold outreach, then cards + stand at the desk.

### Priority queue (current)

| # | Facility | Status | Primary contacts | Charity path |
|---|----------|--------|------------------|--------------|
| 1 | **TRU Community Care** (Longmont ICC + Lafayette admin) | Voicemail to Sunny Justice (Sep 14); intro email to **Sunny Justice & Carey Kerschner** via `donate@trucare.org` (Sep 15) | Sunny Justice (Dir. Development) — desk `720-335-9645`; Carey Kerschner (Foundation & Donor Relations) — no public direct email | TRU 501(c)(3); code `101` |
| 2 | **Pikes Peak Hospice** + **Foundation** (Colorado Springs ICC) | Phone with **Andy Rovella**; warm intro email to **Fara Grange** CC Andy (Sep 15) | Fara Grange (filling in for Foundation ED path); Andy Rovella (Dev Manager) `arovella@…` / `719-457-8104`; Susan Edmondson still listed as Foundation ED online | Separate Foundation EIN `84-1453050`; ~771 ICC patients in 2025 |
| 3 | **Pathways Hospice** (Fort Collins PICC) | Research done; email drafted to `giving@pathways-care.org` — send when ready | Development inbox only (Annie Brunsell **not** verified current) | Operating 501(c)(3) EIN `84-0782874`; no separate foundation |
| 4 | **The Denver Hospice** (Lowry ICC) | Backup / later | `giving@care4denver.org` · `303-321-2828` | Operating 501(c)(3); largest Rocky Mountain ICC (~24 suites; org ~2,850 hospice patients/year 2025) |
| Later | HopeWest (Grand Junction) | Western Slope only | Breeana Gumpert CDO, etc. | Too far for current Front Range focus |

**Volume context for planning**
- Pikes Peak ICC: ~700–800 patients/year (published)
- Denver ICC (largest): rough estimate **~1,000–1,500** individual inpatient patients/year (2023 report's "4,975" reads as inpatient **days**, not people)
- Pathways org: >2,300 patients (2024 ColoradoGives) across settings

**Outreach voice (locked):** warm welcome; Andy/front-desk referral when true; product story; card-only ask; `$10` automatic transfer to **that** hospice's 501(c)(3); `test100` walkthrough; Adam signature with `570-772-3824` and livingobituary.ai; from `adam@livingobituary.com` / `.ai` as available. No invented personal emails. No vendor pitch opener.

---

## 6. Physical distribution (cards)

- **VistaPrint:** ~250 4×6 portrait postcards ordered (~Sep 9); tracking **`1Z0JH733YW14536257`**
- Design locked: Betty bedside photo, "Living Obituary," "Write it with them while they are still here," What $99 includes, giving-back heart/`$10` story, no "sitting," PowerPoint (TV/projector)
- Acrylic stand for desk placement
- **Human walk:** when cards arrive + Connect deposit proves `$10` payouts, walk **TRU Longmont** first (~200 cards + stand): TRU Community Care Hospice Care Center, 1950 Mountain View Ave, 4th Floor South, Longmont (inside Longmont United). Ask donations / Carey–Sunny path; leave stack; get EIN if they'll share
- Then Pathways Fort Collins; then broader Front Range
- Sep 17: VistaPrint sale reminder (up to 40% off) if more print needed

---

## 7. Money / payments stack

| Piece | Status |
|-------|--------|
| Live `$99` Stripe checkout | **Certified** (paid path proven earlier) |
| Warm transactional emails + PDF masthead fix | Re-applied after Sep-7 restore; depend on correct Cloudflare Production deploy |
| Stripe Connect Express | **Enabled** by Adam |
| Test / mark deposit (Fri Sep 11) into Adam's personal checking | **Waiting** (2–3 business days) — **blocker** before promising live `$10` transfers on walks |
| Facility admin (`/admin/facilities/`) + code `101` TRU | Code path re-shipped by Builder; Adam still needs facility onboard + Connect link to charity |
| Cloudflare Pages Production | Repeated Direct Upload pain (old `index-YdVDM-nu.js` vs intended zip); Ara walkthrough when stuck; live gift `$10` confirmed Sep 14 |
| Zoho DMARC | Still `none` (monitoring); bump to `quarantine` ~Sep 29 if clean; confirm iPhone Mail IMAP for `adam@livingobituary.ai` |

**Rule:** do not walk TRU or promise Sunny a live `$10` transfer until the Connect test deposit shows.

---

## 8. Site / product experience priorities

1. Money path always green (`/api/health`: stripe, mail, db)
2. Quiet giving-back on homepage (hero chip → warm `#gift`)
3. Nav honesty (What you get → `$99` package, not donation page)
4. Photo reorder (drag + up/down) fixed in zip — must be on live Production
5. Partner demo via `test100`
6. No "sitting" in user-facing copy
7. Share / resume / contribute family photo links preserved on good builds

---

## 9. What we are deliberately not doing (yet)

- Paid Meta / geofence ads as primary launch (pamphlets + desk cards beat that for hospice)
- National sprawl before Colorado inpatient proof
- Loud Donate UX that confuses the `$99` purchase
- Vendor RFPs and "sell into hospice IT"
- Freelancing design without Adam confirming understanding first

---

## 10. Immediate sequence (money-first)

1. **Confirm Stripe Connect test deposit** in personal checking (today's push)
2. When deposit lands → treat `$10` payouts as financially proven
3. When VistaPrint package arrives → **walk TRU Longmont** with cards + stand
4. Follow Sunny/Carey + Fara/Andy email replies; send Pathways email when ready
5. Onboard facility codes + Connect links as each charity says yes
6. Optional: more VistaPrint before Sep 17 sale ends
7. Sep 29: DMARC → quarantine if mail is clean; IMAP check

---

## 11. Year-one ambition (directional, not a forecast)

Earlier best-case framing: order of **~2,500 paid packages** (~`$247k` gross) via pamphlet/card density across Colorado hospices — only meaningful after Connect is proven and TRU/Pathways/Pikes Peak desks are live. Near-term success = **real `$99`s from facility-coded checkouts**, not vanity traffic.

---

## 12. One-line strategy

**Gift-led hospice desk cards in Colorado → families self-serve Living Obituary on their phones → `$99` pays → `$10` auto-routes to that facility's 501(c)(3) via Connect — under Christ, money first, no vendor pitch.**
