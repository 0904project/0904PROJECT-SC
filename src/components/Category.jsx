// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Circle } from 'lucide-react';
import LatestProduct from "./LatestProduct.jsx";
import { BsFillTagsFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function Category({selectedTag}) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            title: 'Web Development',
            subcategories: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Web Algoritma',
            subcategories: ['Data Mining', 'Genetika']
        },
        {
            title: 'Web React',
            subcategories: ['Hooks', 'Context', 'Redux']
        },
        {
            title: 'Web Design',
            subcategories: ['UI', 'UX']
        },
        {
            title: 'Web Security',
            subcategories: ['Authentication', 'Authorization']
        }
    ];

    const handleCategoryClick = (index) => {
        if (selectedCategory === index) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(index);
        }
    };

    return (
        <div className="relative microsoft2:w-56 max:w-72 bg-white p-4 rounded-2xl shadow-md hidden lg:block">
            <div className="p-3 rounded-2xl shadow-lg">
                <div
                    className="text-[13px] max:text-sm font-semibold bg-emerald-500 text-slate-100 relative bottom-3 right-3 max:w-[16rem] microsoft2:w-[12rem]  px-5 py-1.5 rounded-t-2xl">Kategori
                </div>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index} onClick={() => handleCategoryClick(index)}>
                            <span className={'flex gap-2 cursor-pointer text-sm hover:text-emerald-500 mb-1'}>
                                <BsFillTagsFill className={'fill-emerald-500 text-white'} size={19}/>{category.title}
                            </span>
                            {selectedCategory === index && (
                                <ul>
                                    {category.subcategories.map((subcategory, subIndex) => (
                                        <li key={subIndex} className={'px-8'}><span
                                            className={'flex items-center gap-2 text-[10px] cursor-pointer hover:text-emerald-500 mb-1'}><Circle
                                            size={6} className={'fill-black'}/>{subcategory}</span></li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-5 p-3 rounded-2xl shadow-lg">
                <div
                    className="text-[13px] max:text-sm font-semibold bg-emerald-500 text-slate-100 relative bottom-3 right-3 max:w-[16rem] microsoft2:w-[12rem]  px-5 py-1.5 rounded-t-2xl">Latest Updates
                </div>
            <LatestProduct selectedTag={selectedTag} />

            </div>
        </div>
    );
}