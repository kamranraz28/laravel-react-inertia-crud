import { Head } from "@inertiajs/react";

export default function Create() {
    return (
        <>
            <Head title="Create Post" />
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-2xl font-bold">Create New Post</h1>

                <form method="POST" action="/posts">
                    {/* CSRF token (reads <meta name="csrf-token">) */}
                    <input
                        type="hidden"
                        name="_token"
                        value={typeof document !== 'undefined' ? (document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '') : ''}
                    />

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
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
}
