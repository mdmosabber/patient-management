// export default function InputLabel({ value, className = '', children, ...props }) {
//     return (
//         <label {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
//             {value ? value : children}
//         </label>
//     );
// }


export default function InputLabel({ value, className = '', children, required, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ${className}`}>
            {value ? (
                <>
                    {value}
                    {required && <span className="text-red-500">*</span>}
                </>
            ) : (
                <>
                    {children}
                    {required && <span className="text-red-500">*</span>}
                </>
            )}
        </label>
    );
}
