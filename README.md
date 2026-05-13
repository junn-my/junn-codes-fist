# mmu.junn.codes

> A community-built resource hub for MMU FIST students — by [junn.codes](https://junn.codes)

Subject guides, downloadable materials, and FYP showcases for the Faculty of Information Science and Technology at Multimedia University.

**Not affiliated with Multimedia University.**

---

## Stack

| Layer        | Tech                                    |
| ------------ | --------------------------------------- |
| Framework    | Next.js 15 (App Router, static export)  |
| Styling      | CSS Modules + Tailwind CSS v4           |
| Fonts        | DM Serif Display + DM Sans              |
| Hosting      | Cloudflare Pages                        |
| File storage | Cloudflare R2                           |
| Search       | Pagefind (static, built at deploy time) |

## Project structure

```
app/
  subjects/
    TIT3151/page.tsx   ← each subject is its own page
  fyp/
    2024-project/page.tsx
  news/
  contact/
components/
  layout/              ← Navbar, Footer
  subject/             ← SubjectLayout + section components
  fyp/                 ← FypLayout + section components
  ui/                  ← Badge, DownloadButton, etc.
lib/
  types.ts             ← TypeScript types for SubjectMeta, FypMeta, etc.
scripts/
  new-subject.mjs      ← npm run new:subject
  new-fyp.mjs          ← npm run new:fyp
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) — students and alumni are very welcome.

```bash
npm install
npm run dev

# scaffold a new subject page
npm run new:subject

# scaffold a new FYP page
npm run new:fyp
```

## Deployment

Pushes to `main` auto-deploy to Cloudflare Pages.
The build runs `next build && pagefind --site out` to generate the static search index.

## License

Content contributed by students and alumni remains their own.
Site code is MIT licensed.
