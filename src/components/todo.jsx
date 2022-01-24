
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal'
import '../styles/body.css';
import '../styles/singleToDo.css';


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
        // e.preventDefault();
        const result = await axios.put(`http://localhost:5000/${id}`, task);
        console.log(result);
        setModalIsOpen(false);
    }


    return <div className='status'>
        <div className='statusTitle'>
            <span>TODO</span>

        </div>
        {tasks.map((task, index) =>
            <div className='card' key={index}>
                <div className='cardHeader'>
                    <span>{task.title}</span>
                </div>
                <div className='description'>
                    <span>{task.description}</span>
                    <div className='bottom'>
                        <i className="far fa-trash-alt" onClick={() => deleteTask(task._id)}></i>
                        <i className="far fa-edit" onClick={() => setModalIsOpen(true)}></i>
                    </div>
                </div>
                {/* pop up box for updating task */}
                <Modal id='modal' isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={
                        {
                            overlay: {
                                backgroundColor: 'rgba(0,0,0,0.5)'
                            },
                            content: {
                                color: 'black',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                                width: '20vw',
                                height: '10vh',
                                margin: 'auto',
                            }
                        }}
                >
                    <input
                        className='input'
                        name='title'
                        type='text'
                        placeholder='Title'
                        style={{ backgroundColor: 'white', color: 'black' }}
                        defaultValue={task.title}
                        onChange={handleChange}

                    />
                    <textarea
                        className='input'
                        name='description'
                        placeholder='Description'
                        style={{ backgroundColor: 'white', color: 'black' }}
                        defaultValue={task.description}
                        onChange={handleChange}
                    />

                    <button onClick={() => handleUpdate(task._id)}>update</button>
                </Modal>
            </div>
        )}
    </div>;
}
