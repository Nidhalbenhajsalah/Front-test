import React from 'react';
import SingleToDo from './singleToDo';
import '../styles/body.css';
export default function todo() {
    return <div className='status'>
        <div className='statusTitle'>
            <span>TODO</span>

        </div>
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />

    </div>;
}
