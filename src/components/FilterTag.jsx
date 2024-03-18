import React from 'react';

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
    return (
        <ul className="relative flex flex-row gap-1 list-none overflow-y-auto scrollbar-hide " >
            {list.map((lis, index) => (
                <li key={index}>
                    <button
                        className={'px-3 py-1 text-center justify-center items-center text-[11px] text-slate-400 uppercase rounded-full border-2 border-slate-400'}
                        onClick={() => onTagClick(lis)}>
                        {lis}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default FilterTag;