This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Agenda

- [x] Implementing file-based routing via the new app folder
- [x] Migrating from \_app.tsx and \_document.tsx to a root layout
- [x] Understanding file conventions
- [x] Displaying loading state
- [x] Migrating from getServerSideProps to React Server Components
- [x] Declaring root and nested layouts
- [x] Customizing error pages via error boundaries
- [x] Linking between pages
- [ ] Streaming responses to improve TTFB
- [ ] Styling active links via usePathname
- [ ] Programmatic nav via useRouter
- [ ] Automatic prefetching
- [ ] Grouping related routes via groups
- [ ] Fetching on the server via React Server Components
- [x] Declaring client-side components via use-client
- [ ] Composing server components within client components
- [ ] Importing CSS in components
- [ ] Fetching and caching via React Query
- [ ] Other topics found and agreed upon as relevant during discovery.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## My Notes

- Watch out - Make sure you're not editing the .next folder. If you move a file, VS Code opens the changed file, but doesn't save it. So, save the file and close it.

## TODO

- [ ] Implement react-query like this: https://twitter.com/i/bookmarks/1682019945238994946
