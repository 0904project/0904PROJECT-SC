// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { X } from 'lucide-react';

// eslint-disable-next-line react/prop-types
function FilterTag({ onTagClick }) {
    const list = [
        'html',
        'css',
        'javascript',
        'reactjs',
        'tailwind',
        'laravel',
        'Goo',
    ]
    const [activeTags, setActiveTags] = useState([]);

    const handleClick = (tag) => {
        if (activeTags.includes(tag)) {
            // Jika tag yang diklik sudah ada dalam activeTags,
            // hapus tag tersebut dari activeTags.
            setActiveTags(activeTags.filter(t => t !== tag));
            onTagClick(activeTags.filter(t => t !== tag));
        } else {
            // Jika tidak, tambahkan tag tersebut ke activeTags.
            setActiveTags([...activeTags, tag]);
            onTagClick([...activeTags, tag]);
        }
    }

    return (
        <ul className="relative px-6 md:px-0 flex flex-row gap-1 list-none overflow-y-auto scrollbar-hide " >
            {list.map((lis, index) => (
                <li key={index}>
                    <button
                        className={`px-3 py-1 flex flex-row text-center justify-between items-center text-[11px] uppercase rounded-full border-2 cursor-pointer hover:bg-gradient-to-br hover:from-emerald-500 hover:to-sky-500 hover:text-slate-100
                        ${activeTags.includes(lis) ? ' bg-gradient-to-br from-emerald-500 to-sky-500 text-slate-100' : 'text-slate-400 border-slate-400'}`}
                        onClick={() => handleClick(lis)}>
                        {activeTags.includes(lis) ? <X size={13} style={{marginBottom:2,marginRight:5}}/> : null}{lis}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default FilterTag;