This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Agenda

- [ ] [Use TypeScript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [ ] [Key API differences](https://nextjs.org/blog/next-13-4#zero-setup-use-the-filesystem-as-an-api) between pages and app
- [ ] Implementing file-based routing via the new app folder
- [ ] Migrating from \_app.tsx and \_document.tsx to a root layout
- [ ] Understanding file conventions
- [ ] Displaying loading state
- [ ] Migrating from getServerSideProps to React Server Components
- [ ] Declaring root and nested layouts
- [ ] Customizing error pages via error boundaries
- [ ] Declaring client-side components via use-client. Note: [props passed from server to client components must be serializable](https://nextjs.org/docs/getting-started/react-essentials#passing-props-**from**-server-to-client-components-serialization), because they cross the network boundary.
- [ ] Linking between pages
- [ ] Implementing middleware
- [ ] Implementing a 404 page
- [ ] [React Server components introduction](https://nextjs.org/docs/getting-started/react-essentials) (review docs page)
- [ ] Fetching on the server via React Server Components
- [ ] Wrapping in Suspense to stream responses to improve TTFB and lazy load slow portions of a server-rendered page.
- [ ] Parallel routes (implemented on home page)
- [ ] Styling active links via usePathname
- [ ] Implementing React context with the new app folder
- [ ] Styling via Tailwind
- [ ] Use the [server only package](https://nextjs.org/docs/getting-started/react-essentials#the-server-only-package) to keep server-side code from being imported in client components (useful for secrets)
- [ ] [Wrap third party packages that lack the use client directive if needed](https://nextjs.org/docs/getting-started/react-essentials#third-party-packages).
- [ ] [Share global data on the server via plain JS patterns](https://nextjs.org/docs/getting-started/react-essentials#sharing-data-between-server-components)
- [ ] Programmatic nav via useRouter
- [ ] Automatic prefetching
- [ ] Grouping related routes via groups
- [ ] Composing server components within client components [via slots](https://nextjs.org/docs/getting-started/react-essentials#recommended-pattern-passing-server-components-to-client-components-as-props)
- [ ] Importing CSS in components (unlike pages, you can import (and colocate) any CSS file in any component)
- [ ] Fetching via React Query
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
- If you're seeing "old" data, then delete the .next folder. I wasted a LOT of time because it kept seeing a single record from the api, instead of the updated array I was sending.

## TODO

- [ ] Implement react-query like this: https://twitter.com/i/bookmarks/1682019945238994946
