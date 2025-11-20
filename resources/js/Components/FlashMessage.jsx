import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function FlashMessage() {
    const { flash } = usePage().props;

    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(100); // progress bar starts full

    useEffect(() => {
        if (flash.success || flash.error) {
            setVisible(true);
            setProgress(100);

            // Animate progress bar (2 seconds)
            const interval = setInterval(() => {
                setProgress((prev) => prev - 2); // reduce gradually
            }, 40); // 40ms * 50 = 2000ms

            // Auto hide after 2 seconds
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 2000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [flash]);

    if (!flash.success && !flash.error) return null;

    return (
        <div
            className={`fixed top-5 right-5 z-[9999] min-w-[250px] transition-all duration-500
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
            `}
        >
            <div
                className={`rounded-lg shadow-lg p-4 ${
                    flash.success
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                }`}
            >
                <p className="font-semibold">
                    {flash.success || flash.error}
                </p>

                {/* Progress Loader */}
                <div className="mt-3 w-full bg-white bg-opacity-30 h-1 rounded overflow-hidden">
                    <div
                        className="h-full bg-white"
                        style={{
                            width: `${progress}%`,
                            transition: "width 0.04s linear",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
