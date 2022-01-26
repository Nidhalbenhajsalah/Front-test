import React from 'react';
import Todo from './todo';
import InProgress from './inprogress';
import Done from './done';
import Modal from 'react-modal'
import '../styles/body.css';

Modal.setAppElement('#root');

const Body = () => {





    return (
        <div className='body'>
            <Todo />
            <InProgress />
            <Done />
        </div>
    )
}

export default Body;
