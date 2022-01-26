import React from 'react';
import SingleToDo from './singleToDo';
const Inprogress = () => {


    return <div className='status'>
        <div className='statusTitle'>
            <span>INPROGRESS</span>
        </div>
        <SingleToDo />
    </div>;
}

export default Inprogress;
