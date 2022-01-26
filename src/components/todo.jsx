
import React from 'react';
import Modal from 'react-modal'
import '../styles/body.css';
import '../styles/singleToDo.css';
import SingleToDo from './singleToDo';



Modal.setAppElement('#root');
const Todo = () => {

    return (
        <div className='status'>
            <div className='statusTitle'>
                <span>TODO</span>
            </div>
            <SingleToDo />
        </div >
    )
}

export default Todo;
