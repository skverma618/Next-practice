This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

`npx create-next-app@latest`

```bash
npm run dev

```

page.ts - client side page for a user
route.ts- api route

### Tailwind CSS

```
npm install tailwindcss postcss autoprefixer
npx tailwindcss init


```

with `antialiased`, text may appear more smoother and sharper on larger screens.

## DATA FETCHING

- Next.js provides three main methods for data fetching, depending on when and how you want to fetch the data:

1. getStaticProps() – Static Generation

- Data is fetched at build time and cached. Automatically runs only during build.

```
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }: { posts: any[] }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

```

2. getServerSideProps() – Server-Side Rendering (SSR)
   Used to fetch data on every request.

- Data is fetched at runtime (each time the page is accessed).

3. getStaticPaths() – Dynamic Routes for Static Pages
