import React from 'react';

const Test =(props)=>{
    const {item} = props;
    return(
        <div className='tests'>
            {item.grades.map((item,key)=>
                <p className='text' key={key}>Test {parseInt(key)+1}: <span className='space'> {item}% </span></p>
            )}
        </div>
    );
}

export default Test;



