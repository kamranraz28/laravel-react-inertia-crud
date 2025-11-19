import { Head } from "@inertiajs/react";

export default function Edit({post}) {
    return (
        <>
            <Head title="Edit Post" />
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-2xl font-bold">Edit Post</h1>

                <form method="POST" action={`/posts/${post.id}`}>
                    {/* CSRF token (reads <meta name="csrf-token">) */}
                    <input
                        type="hidden"
                        name="_token"
                        value={typeof document !== 'undefined' ? (document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '') : ''}
                    />
                    <input type="hidden" name="_method" value="PUT" />

                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block mb-2 font-semibold"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full p-2 border border-gray-300 rounded"
                            defaultValue={post.title}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="body"
                            className="block mb-2 font-semibold"
                        >
                            Body
                        </label>
                        <textarea
                            id="body"
                            name="body"
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="5"
                            defaultValue={post.body}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
}
