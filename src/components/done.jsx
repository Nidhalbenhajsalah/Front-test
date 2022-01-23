import React from 'react';
import SingleToDo from './singleToDo';
export default function done() {
    return <div className='status'>
        <div className='statusTitle'>
            <span>DONE</span>

        </div>
        <SingleToDo />
    </div>;
}
