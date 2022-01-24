import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/body.css';
import '../styles/singleToDo.css';



export default function Todo() {
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        const getTasks = async () => {
            const result = await axios.get('http://localhost:5000');
            setTasks(result.data);
        }
        getTasks();
    }, [tasks])

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/${id}`);
            setTasks(tasks.filter(task => task.id !== id))
        }
        catch (err) {
            console.log(err)
        }
    }

    return <div className='status'>
        <div className='statusTitle'>
            <span>TODO</span>

        </div>
        {tasks.map((task, index) =>
            <div className='card' key={index}>
                <div className='cardHeader'>
                    <span>{task.title}</span>
                    {/* <span>{task._id}</span> */}
                </div>
                <div className='description'>
                    <span>{task.description}</span>
                </div>
                <div className='bottom'>
                    <i className="far fa-trash-alt" onClick={() => deleteTask(task._id)}></i>
                    <i className="far fa-edit"></i>
                </div>
            </div>
        )}
    </div>;
}
