import React from 'react';
// import SingleToDo from './singleToDo';
import '../styles/body.css';
import '../styles/singleToDo.css';
import tasks from '../data';


export default function todo() {
    return <div className='status'>
        <div className='statusTitle'>
            <span>TODO</span>

        </div>
        {tasks.map((task, index) =>
            <div className='card' key={index}>
                <div className='cardHeader'>
                    <span>{task.title}</span>
                    <span>{task.id}</span>
                </div>
                <div className='description'>
                    <span>{task.description}</span>
                </div>
            </div>
        )}
    </div>;
}
