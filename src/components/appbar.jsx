import React from 'react';
import '../styles/appbar.css';
import Modal from 'react-modal'
import { useState, useEffect } from 'react';
import axios from 'axios';

Modal.setAppElement('#root');
const Appbar = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: '',
    });



    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postURL = 'http://localhost:5000';
        try {
            await axios.post(postURL, task);
            setModalIsOpen(false);
        }
        catch (err) {
            console.log(err);
        }
    }

    return <div className='appbar'>
        <div className='appbarElements'>
            <div>
                <i className="fas fa-bars"></i>
            </div>
            <p>SCRUM DASH</p>
        </div>
        <div className='addTask'>
            <i className="fas fa-plus" onClick={() => setModalIsOpen(true)}></i>
        </div>
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
                onChange={handleChange}
            />
            <textarea
                className='input'
                name='description'
                placeholder='Description'
                style={{ backgroundColor: 'white', color: 'black' }}
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>save</button>
        </Modal>

    </div >;
};

export default Appbar;
