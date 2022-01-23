import React from 'react';
import '../styles/appbar.css';
import Modal from 'react-modal'
import { useState } from 'react';

Modal.setAppElement('#root');
const Appbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <Modal isOpen={modalIsOpen}
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
                        width: '500px',
                        height: '10vh',
                    }
                }}
        >
            <input type='text' placeholder='Title' />
            <textarea placeholder='Description' />
            <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>

    </div >;
};

export default Appbar;
