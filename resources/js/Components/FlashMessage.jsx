import { usePage } from "@inertiajs/react";

export default function FlashMessage() {
    const { flash } = usePage().props;

    if (!flash?.success && !flash?.error) return null;

    return (
        <div className="mb-4">
            {flash.success && (
                <div className="p-3 mb-2 text-green-800 bg-green-200 border border-green-300 rounded">
                    {flash.success}
                </div>
            )}

            {flash.error && (
                <div className="p-3 mb-2 text-red-800 bg-red-200 border border-red-300 rounded">
                    {flash.error}
                </div>
            )}
        </div>
    );
}
