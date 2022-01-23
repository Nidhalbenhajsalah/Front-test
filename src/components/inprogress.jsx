import React from 'react';
import SingleToDo from './singleToDo';
export default function inprogress() {
    return <div className='status'>
        <div className='statusTitle'>
            <span>INPROGRESS</span>

        </div>
        <SingleToDo />
    </div>;
}
