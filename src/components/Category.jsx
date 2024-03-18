import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Category({ categories }) {
    return (
        <div className="relative w-72 bg-white p-4 rounded-md shadow-md hidden max:block">
            <h2 className="font-semibold text-lg mb-2">Categories</h2>
            <select className="w-full border rounded-md p-2">
                {/* eslint-disable-next-line react/prop-types */}
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
}