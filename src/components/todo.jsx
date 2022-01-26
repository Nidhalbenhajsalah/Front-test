
import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal'
import axios from 'axios';
import '../styles/body.css';
import SingleToDo from './singleToDo';



Modal.setAppElement('#root');
const Todo = () => {

    const status = 'todo';
    const [id, setId] = useState();

    const updateStatus = async (id) => {
        try {
            await axios.put(`http://localhost:5000/${id}`, { status: 'todo' });

        }
        catch (err) {
            console.log(err)
        }
    }
    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e) => {
        const id = e.dataTransfer.getData('id');
        console.log('drop', id);
        setId(id);
        updateStatus(id);
    }

    return (
        <div className='status'
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <div className='statusTitle'>
                <span>TODO</span>
            </div>
            <SingleToDo status={status} id={id} />
        </div >
    )
}

export default Todo;
