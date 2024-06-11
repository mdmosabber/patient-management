import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextArea({ className = '', errors = [], isFocused = false, ...props }, ref) {
    const textareaRef = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            textareaRef.current.focus();
        }
    }, [isFocused]);

    return (
        <div className="flex flex-col items-start">
            <textarea
                {...props}
                className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className} ${errors.length ? 'error' : ''}`}
                ref={textareaRef}
            />
            {errors && <div className="text-sm text-red-600 mt-1">{errors}</div>}
        </div>
    );
});
