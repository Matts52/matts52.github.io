# CLAUDE.md — matts52.github.io

Portfolio site for Matthew Senick. Deployed via GitHub Pages at `matthewsenick.com`. Vanilla HTML/CSS/JS — no frameworks, no build step.

---

## File Structure

```
/
├── index.html          # Single-page app shell: navbar, section placeholders, footer
├── index.js            # window.onload orchestration, IntersectionObserver, dark mode, scroll progress
├── styles.css          # All styles (~1100 lines); design tokens at top in :root
├── 404.html            # Custom 404 page
├── CNAME               # matthewsenick.com
├── favicon.ico
│
├── scripts/
│   ├── gen_tiles.js    # Async data fetchers — one function per section, inject into section innerHTML
│   └── gen_shapes.js   # SVG floating shapes for hero background
│
├── data/               # JSON data files — edit these to update content
│   ├── experience.json
│   ├── education.json
│   ├── projects.json
│   ├── papers.json
│   ├── articles.json   # Nested: { "medium": [...], "substack": [...] }
│   ├── speaking.json   # Flat array of speaking engagements
│   └── contact.json
│
└── assets/
    ├── companies/      # Company/institution logos (SVG/PNG)
    ├── icons/          # Tech stack icons + social icons (SVG)
    ├── projects/       # Project screenshots
    ├── papers/         # Paper PDFs
    ├── other/          # avatar.PNG
    └── files/          # Resume_Short.pdf
```

---

## How Sections Work

Every content section follows the same pattern:

1. **Placeholder in `index.html`**: `<section id="section-name"></section>`
2. **Nav link in `index.html`**: `<li><a href="#section-name">Label</a></li>`
3. **Data file in `data/`**: JSON fetched at runtime
4. **Generator function in `scripts/gen_tiles.js`**: async function that fetches JSON and sets `section.innerHTML`
5. **Call in `index.js`**: added to `window.onload`
6. **CSS in `styles.css`**: section-specific styles appended after existing sections

The `IntersectionObserver` in `index.js` auto-observes all `<section>` elements and adds `.in-view` for fade-in animations — no extra wiring needed for new sections.

### Adding a new section (checklist)

- [ ] Add `<section id="new-section"></section>` to `index.html` at the right position
- [ ] Add `<li><a href="#new-section">Label</a></li>` to the navbar `<ul class="nav-links">`
- [ ] Create `data/new-section.json`
- [ ] Add `async function generateNewSectionTiles()` to `scripts/gen_tiles.js`
- [ ] Call `generateNewSectionTiles()` inside `window.onload` in `index.js`
- [ ] Add CSS to `styles.css` (after the last section block, before the footer block)

---

## Design Tokens

All tokens live in `:root` at the top of `styles.css`. Dark mode overrides them under `.dark-mode`.

| Token | Light value | Purpose |
|---|---|---|
| `--bg` | `#F8F9FB` | Page background |
| `--text` | `#181A1B` | Body text |
| `--text-muted` | `#555` | Secondary text |
| `--accent` | `#4CAF50` | Green — links, buttons, dots, underlines |
| `--accent-light` | `rgba(76,175,80,0.1)` | Hover tint on ghost buttons |
| `--card-bg` | `#FFFFFF` | Card background |
| `--card-border` | `rgba(0,0,0,0.06)` | Card border color |
| `--card-shadow` | `0 2px 8px rgba(0,0,0,0.06)` | Default card shadow |
| `--card-shadow-hover` | `0 8px 24px rgba(0,0,0,0.1)` | Hover card shadow |
| `--divider` | `rgba(0,0,0,0.08)` | Horizontal rules, separators |
| `--font-body` | `Space Grotesk` | All body text |
| `--font-accent` | `Spectral` (serif, italic) | Descriptions, abstracts |
| `--space-1..8` | `0.25rem` to `5rem` | 8pt spacing scale |

**Always use CSS variables — never hardcode colors or spacing.**

---

## Key CSS Patterns

### Cards
```css
.card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 12px; box-shadow: var(--card-shadow); }
.card:hover { transform: translateY(-4px); box-shadow: var(--card-shadow-hover); border-color: var(--accent); }
```

### Buttons
- `.btn-accent` — filled green, white text
- `.btn-ghost` — transparent, green border
- `.btn-sm` — smaller padding/font override (combine with btn-ghost: `class="btn-ghost btn-sm"`)

### Grids
- `.grid` — `repeat(auto-fit, minmax(280px, 1fr))`
- `.grid-4` — `repeat(4, 1fr)` (collapses to 2 on mobile, 1 on small mobile)
- `.articles-grid` — `repeat(auto-fit, minmax(320px, 1fr))`

### Section headings
`section h2` gets a 40px × 3px green underline via `::after` pseudo-element automatically.

### Section fade-in
Sections start invisible (`opacity: 0; transform: translateY(20px)`). The `IntersectionObserver` in `index.js` adds `.in-view` which transitions them in. The hero `#title` starts with `.in-view` already applied.

---

## Existing Sections & Their Layouts

| Section ID | Layout | Data file | Notable fields |
|---|---|---|---|
| `#title` | Hero grid (manual) | — | Static HTML; `.name` at 5.5rem; `.subtitle` is Spectral italic tagline |
| `#about-me` | Terminal block + icon rows | — | Static HTML; dark terminal aesthetic regardless of light/dark mode |
| `#experience` | Grouped employer accordion | `experience.json` | `company`, `logoSrc`, `position`, `date`, `description` (array); roles grouped by company, expandable |
| `#education` | Two-column card grid | `education.json` | `logoSrc`, `degree`, `institution`, `date`, `courseGroups` (array of `{ label, courses: [{ name, grade }] }`) |
| `#projects` | Card grid with images | `projects.json` | `display: "true"` to show, `githubLink`, `imageSrc`, `demoLink` |
| `#papers` | Card grid with images | `papers.json` | `githubLink`, `imageSrc`, `pdfLink` |
| `#speaking` | Ticket cards (dashed border) | `speaking.json` | `event`, `eventLogo`, `title`, `abstract`, `date`, `location`, `upcoming`, `links.{eventPage,slides,recording}` |
| `#articles` | Two-column platform cards | `articles.json` | Nested `{ medium: [], substack: [] }`, items have `show: true` to display |
| `#contact` | 4-column icon grid | `contact.json` | `iconSrc`, `title`, `link` |

**Current nav order:** About → Experience → Education → Projects → Speaking → Papers → Articles → Social → Resume

---

## Hero Section

- `.name` is 5.5rem desktop / 3.25rem mobile, `letter-spacing: -0.04em`, `line-height: 1.0`
- `.subtitle` is Spectral italic in `var(--text-muted)` — used as a punchy tagline, not the job title
- Job title lives in `.credential` alongside degrees and location
- Hero `min-height` is `92vh`

---

## About Section (Terminal Block)

The about section uses a terminal aesthetic — always dark regardless of light/dark mode:

- `.terminal` — dark card with macOS traffic-light titlebar (`.terminal__bar` with `#2a2c2e` background)
- `.terminal__body` — `#1a1c1e` background, monospace font stack (`SF Mono`, `Fira Code`, `Menlo`)
- Structure: `>` prompt + command label, then `.terminal__line` key-value rows indented below
- `.terminal__key` — blue (`#7ecfff`); `.terminal__sep` — dimmed; values in muted grey
- `.terminal__cursor` — green blinking `▌` at the end
- Followed by `.icon-rows` tech stack icons (unchanged)

---

## Experience Section

Roles are grouped by employer. Each group has a left column (logo + company name, centered) and a right column of accordion rows.

- `.exp-group` — two-column grid: `160px` label column + `1fr` roles column
- `.exp-role__toggle` — button row: role title left, date right, chevron indicator
- `.exp-role--open` — class toggled by click; shows `.exp-role__bullets` and rotates chevron
- First role of first group opens by default
- Dark mode logo invert: applied to all logos **except** `utoronto` and `usask` (those logos are already visible in dark mode)

---

## Education Section

- `.edu-grid` — `repeat(auto-fit, minmax(340px, 1fr))`
- Each `.edu-card` has a header (logo + degree + institution + date) and a course section
- Courses use `courseGroups`: array of `{ label, courses: [{ name, grade }] }` — always rendered as a two-column split (`.edu-card__split`)
- `.edu-course` — flex row with name left-aligned, grade right-aligned in accent green

---

## Speaking Section

The speaking section uses a ticket/badge aesthetic unique to this site:

- Dashed perforated border (`border: 2px dashed var(--card-border)`)
- Left stub: event logo, event name, date/location; separated by vertical dashed border
- Right body: speaker label, talk title, abstract, CTA buttons
- Slight rotation (`rotate(-0.4deg)`) un-rotates on hover with a lift
- `"upcoming": true` renders a green "COMING SOON" pill badge (`.ticket__badge`)
- `links` fields are nullable — only non-null links render buttons
- Mobile: stacks vertically with horizontal dashed divider

---

## Assets

### Available icons (`assets/icons/`)
`python`, `sql`, `r`, `snowflake`, `dbt`, `js`, `postgresql`, `stata`, `java`, `cpp` (PNG), `github`, `github-white`, `linkedin-white`, `email-white`, `new_medium_logo`, `substack`, `behance`, `star`, `live`, `close`

### Available company logos (`assets/companies/`)
`sigma-computing`, `7shifts`, `7shifts-rebrand`, `7shifts_full`, `affinity-logo`, `standardaero-logo` (PNG), `usask-logo` (PNG), `utoronto-logo` (PNG)

**VBA is intentionally excluded from the skills/icons display.**

---

## Development

```bash
# Serve locally (no build needed)
python3 -m http.server

# Then open http://localhost:8000
```

No npm, no bundler, no compilation. Edit files and refresh.

**Deployment**: push to `main` — GitHub Pages deploys automatically via the `CNAME` config.

---

## Style Guidelines

- No frameworks — vanilla HTML/CSS/JS only
- No emojis unless explicitly requested
- Use CSS variables, never hardcode colors or spacing
- Dark mode must work for every new element — test by toggling `.dark-mode` on `<body>`
- Mobile breakpoints: `768px` (main), `600px` (ticket stacking), `480px` (small grids)
- Prefer editing existing files over creating new ones
- Do not add comments, docstrings, or type annotations to unchanged code
