import React from 'react';
import SingleToDo from './singleToDo';
import '../styles/body.css';


const Done = () => {



    return <div className='status'>
        <div className='statusTitle'>
            <span>DONE</span>
        </div>
        <SingleToDo />
    </div>;
}
export default Done;
