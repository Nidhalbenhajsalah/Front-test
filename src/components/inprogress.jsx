import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import SingleToDo from './singleToDo';

const Inprogress = () => {

    const [id, setId] = useState();
    const status = 'inprogress';

    const updateStatus = async (id) => {
        try {
            await axios.put(`http://localhost:5000/${id}`, { status: 'inprogress' });

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

    return <div className='status'
        onDragOver={onDragOver}
        onDrop={onDrop}
    >
        <div className='statusTitle'>
            <span>INPROGRESS</span>
        </div>
        <SingleToDo status={status} id={id} />
    </div>;
}

export default Inprogress;
