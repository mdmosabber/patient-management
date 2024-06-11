import React from 'react';

export default ({
        label,
        name,
        className,
        children,
        errors = [],
        ...props
    }) => {
    return (
        <div>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}:
                </label>
            )}
            <select
                id={name}
                name={name}
                {...props}
                className={`form-select ${className}  ${errors.length ? 'error' : ''}`}
            >
                {children}
            </select>
            {errors && <div className="text-sm text-red-600 mt-1">{errors}</div>}
        </div>
    );
};
