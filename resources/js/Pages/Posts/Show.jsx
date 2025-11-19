import { Head, Link } from '@inertiajs/react';

export default function Show({ post }) {
  return (
    <>
      <Head title={post.title} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="mt-4 whitespace-pre-wrap">{post.body}</p>

        <div className="mt-4">
          <Link href="/posts">Back</Link>
          <Link href={`/posts/${post.id}/edit`} className="ml-4">Edit</Link>
        </div>
      </div>
    </>
  );
}
