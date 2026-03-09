import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        body: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h1 className="mb-4 text-2xl font-bold">Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-semibold">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <InputError field="title" className="mt-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="body" className="block mb-2 font-semibold">
                        Body
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="5"
                    ></textarea>
                    <InputError field="body" className="mt-2" />
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
}
