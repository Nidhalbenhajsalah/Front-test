import React from 'react';
import '../styles/body.css';
import { useEffect, useState } from 'react';

export default function Done() {
    const savedtasks = JSON.parse(localStorage.getItem('task'));
    const [tasks, setTasks] = useState(savedtasks || []);
    useEffect(() => {

        if (savedtasks) {
            setTasks(savedtasks);
        }
    }, [savedtasks])


    return <div className='status'>
        <div className='statusTitle'>
            <span>DONE</span>
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
