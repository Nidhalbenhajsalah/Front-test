import React from 'react';
import Modal from 'react-modal'
// import '../styles/singleToDo.css';

export default function singleToDo({ task, deleteTask, updateTask, modalIsOpen, setModalIsOpen, handleChange, handleUpdate, index }) {
    return <div className='card' key={index} draggable>
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
}
