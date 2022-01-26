
import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import axios from 'axios';
import '../styles/singleToDo.css';

const SingleToDo = () => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: '',
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        let abortController = new AbortController();
        const getTasks = async () => {
            const result = await axios.get('http://localhost:5000');
            setTasks(result.data);
            abortController.abort();
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

    const handleUpdate = async (id) => {
        const result = await axios.put(`http://localhost:5000/${id}`, task);
        console.log('update', result);
        setModalIsOpen(false);
    }

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    return (<div>
        {tasks.map(el =>
            <div key={el._id} className='card'
                draggable
            // onDragStart={(e) => onDragStart(e, task._id)}
            >
                <div className='cardHeader'>
                    <span>{el.title}</span>
                </div>
                <div className='description'>
                    <span>{el.description}</span>
                    <div className='bottom'>
                        <i className="far fa-trash-alt" onClick={() => deleteTask(el._id)}></i>
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
                        defaultValue={el.title}
                        onChange={handleChange}
                    />
                    <textarea
                        className='input'
                        name='description'
                        placeholder='Description'
                        style={{ backgroundColor: 'white', color: 'black' }}
                        defaultValue={el.description}
                        onChange={handleChange}
                    />
                    <button onClick={() => handleUpdate(el._id)}>update</button>
                </Modal>
            </div>)
        }
    </div>
    )
}

export default SingleToDo;