# Contributing to mmu.junn.codes

This is a community-built resource for MMU FIST students, maintained by junn.codes.
**Anyone can contribute** — students, alumni, or faculty.

---

## Ways to contribute

- **Add a new subject page** — write a study guide, upload slides, share tips
- **Improve an existing subject** — fix errors, add content, update downloads
- **Add your FYP** — showcase your final year project
- **Report issues** — broken links, incorrect info, typos

---

## Prerequisites

- Node.js 20+
- Git + GitHub account
- Basic familiarity with JSX (HTML-like syntax in React)

---

## Setup

```bash
# Fork this repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/mmu-junn.git
cd mmu-junn
npm install
npm run dev        # starts at http://localhost:3000
```

---

## Adding a subject page

```bash
npm run new:subject
```

Follow the prompts. A new file will be created at `app/subjects/[CODE]/page.tsx`.

Open the file — you'll see clearly marked `✏️ EDIT` sections. Fill them in with JSX.
You don't need to touch anything outside those sections.

**To add downloadable files** (slides, tutorials, answer schemes):

1. Send the files to [@junn-codes](https://github.com/junn-codes) via the contact page — we'll upload them to R2 and send you the URLs
2. Add the URLs to the `meta.downloads` array in your page file

---

## Adding your FYP page

```bash
npm run new:fyp
```

Follow the prompts. A new file will be created at `app/fyp/[year-slug]/page.tsx`.

Fill in the three sections: overview, technical details, and reflection.
If you have a cover image or screenshots, send them to us for R2 hosting.

---

## Opening a Pull Request

1. Create a branch: `git checkout -b subject/TIT3151` or `git checkout -b fyp/your-project-name`
2. Make your changes
3. Commit: `git commit -m "add TIT3151 Web Programming page"`
4. Push: `git push origin your-branch-name`
5. Open a Pull Request on GitHub

A maintainer will review and merge, usually within 48 hours.

---

## Content guidelines

- Write for a student audience — be clear, practical, and honest
- Don't paste full exam papers — tips and past year _topics_ are fine
- Credit the original lecturer if reproducing slides (only with permission)
- Keep your FYP page factual — don't oversell, just describe
- No spam, no promotional content

---

## Questions?

Open an issue or reach out at [junn.codes/contact](https://junn.codes/contact)
