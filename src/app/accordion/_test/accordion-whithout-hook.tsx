"use client"
// WHITHOUT THE USETOGGLE HOOK
import React from 'react';
import { useState } from 'react';

const Accordion = () => {
    const [ expanded, setExpanded ] = useState(false);
    const toggleExpanded = () => setExpanded((prevExpanded) => !prevExpanded);

    return (
        <div className=' w-40'>
            <button className='p-4 bg-white text-black w-full inline-flex justify-between rouneded-sm' onClick={toggleExpanded}>
                Header <span>{expanded ? "-" : "+"}</span>
            </button>
            {expanded && <div>Content</div>}
        </div>
    )
}


export default Accordion;