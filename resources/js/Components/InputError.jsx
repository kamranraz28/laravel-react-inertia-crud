import { usePage } from "@inertiajs/react";

export default function InputError({ field, className = '', ...props }) {
    const { errors } = usePage().props;

    if (!errors[field]) return null;

    return (
        <p
            {...props}
            className={'text-sm text-red-600 ' + className}
        >
            {errors[field][0]}
        </p>
    );
}
