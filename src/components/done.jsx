import React from 'react';
import SingleToDo from './singleToDo';

import tasks from '../data';
export default function done() {
    console.log(tasks);
    return <div className='status'>
        <div className='statusTitle'>
            <span>DONE</span>
        </div>
        <SingleToDo />
    </div>;
}
