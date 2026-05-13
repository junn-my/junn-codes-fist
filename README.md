# mmu.junn.codes

> A community-built resource hub for MMU FIST students — by [junn.codes](https://junn.codes)

Subject guides, downloadable materials, FYP showcases, and faculty news for the Faculty of Information Science and Technology at Multimedia University.

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
| Formatting   | Prettier + prettier-plugin-tailwindcss  |

## Project structure

```
app/
  subjects/
    TIT3151/
      meta.json          ← subject metadata + download links
      page.tsx
  fyp/
    healthsync-vr/
      meta.json          ← FYP metadata
    [slug]/page.tsx      ← dynamic FYP detail pages
  news/page.tsx
  contact/page.tsx
components/
  layout/                ← Navbar, Footer
  subject/               ← SubjectLayout, SubjectsFilterClient
  fyp/                   ← FypLayout, FypFilterClient
  news/                  ← NewsFilterClient
  ui/                    ← Badge, DownloadButton, SubjectCard, FypCard, NewsCard
content/
  news/                  ← news posts as JSON files
  subjects/README.md     ← contributing guide for subject content
  fyp/README.md          ← contributing guide for FYP content
lib/
  types.ts               ← TypeScript types: SubjectMeta, FypMeta, NewsItem, etc.
  subjects.ts            ← data helpers for subjects
  fyp.ts                 ← data helpers for FYP entries
  news.ts                ← data helpers for news posts
scripts/
  new-subject.mjs        ← npm run new:subject
  new-fyp.mjs            ← npm run new:fyp
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

# format code
npm run format
```

## Deployment

Pushes to `main` auto-deploy to Cloudflare Pages.
The build runs `next build && npx pagefind --site out` to generate the static search index.

## License

Content contributed by students and alumni remains their own.
Site code is MIT licensed.
