import React from 'react';
import Todo from './todo';
import InProgress from './inprogress';
import Done from './done';
import '../styles/body.css';

export default function body() {
    return <div className='body'>
        <Todo />
        <InProgress />
        <Done />
    </div>;
}
