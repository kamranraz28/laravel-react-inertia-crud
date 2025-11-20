import { Head, Link } from "@inertiajs/react";
import FlashMessage from "../../Components/FlashMessage";
export default function Index({ posts }) {
    return (
        <>
            <Head title="Posts" />
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <FlashMessage />
                <h1 className="mb-4 text-2xl font-bold">Posts</h1>
                <ul>
                    {posts.data.map((post) => (
                        <li key={post.id} className="mb-2">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p>{post.body}</p>
                            <Link href={`/posts/${post.id}/edit`} className="text-blue-500 underline">Edit</Link>
                            <Link
                                href={`/posts/${post.id}`}
                                method="delete"
                                as="button"
                                onClick={(e) => { if (!confirm('Delete this post?')) e.preventDefault(); }}
                                className="text-red-500 underline ml-4"
                            >
                                Delete
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                {posts.prev_page_url && (
                    <Link
                        href={posts.prev_page_url}
                        className="px-4 py-2 mr-2 font-semibold text-white bg-gray-500 rounded hover:bg-gray-600"
                    >
                        Previous
                    </Link>
                )}
                {posts.next_page_url && (
                    <Link
                        href={posts.next_page_url}
                        className="px-4 py-2 font-semibold text-white bg-gray-500 rounded hover:bg-gray-600"
                    >
                        Next
                    </Link>
                )}
            </div>
            <div className="mt-4">
                <Link
                    href="/posts/create"
                    className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Create New Post
                </Link>
            </div>
        </>
    );
}
