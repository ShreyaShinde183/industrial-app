import React from 'react';

/**
 * Reusable FilterSelect Component
 */
export const FilterSelect = ({
    id,
    label,
    value,
    onChange,
    options = [],
    defaultOption = "All",
    disabled = false
}) => {
    return (
        <div className="filter-group">
            <label htmlFor={id} className="filter-label">
                {label}
            </label>
            <div className="select-wrapper">
                <select
                    id={id}
                    className="filter-select"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                    aria-label={label}
                >
                    <option value="">{defaultOption}</option>
                    {options.map((opt) => {
                        const optValue = typeof opt === 'string' ? opt : opt.name || opt.value;
                        const optLabel = typeof opt === 'string' ? opt : opt.name || opt.label;
                        return (
                            <option key={optValue} value={optValue}>
                                {optLabel}
                            </option>
                        );
                    })}
                </select>
                <span className="select-chevron" aria-hidden="true">▾</span>
            </div>
        </div>
    );
};

export default FilterSelect;
