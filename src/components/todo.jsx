
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'
import '../styles/body.css';
import '../styles/singleToDo.css';
import SingleToDo from './singleToDo';


Modal.setAppElement('#root');
export default function Todo() {
    const [tasks, setTasks] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: '',
    });


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

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = async (id) => {
        const result = await axios.put(`http://localhost:5000/${id}`, task);
        console.log(result);
        setModalIsOpen(false);
    }




    return <div className='status'>
        <div className='statusTitle'>
            <span>TODO</span>

        </div>
        {tasks.map((task, index) =>
            <SingleToDo
                key={index}
                task={task}
                deleteTask={deleteTask}
                setModalIsOpen={setModalIsOpen}
                modalIsOpen={modalIsOpen}
                handleChange={handleChange}
                handleUpdate={handleUpdate}

            />
        )}
    </div>;
}
