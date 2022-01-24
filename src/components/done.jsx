import React from 'react';
import SingleToDo from './singleToDo';
import '../styles/body.css';
import { useEffect, useState } from 'react';

export default function Done() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('task'));
        setTasks(tasks);
    }, []);
    // const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    return <div className='status'>
        <div className='statusTitle'>
            <span>DONE</span>
        </div>
        <SingleToDo />
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
