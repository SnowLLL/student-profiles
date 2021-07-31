import React, {useState} from 'react';

const Button =(props)=>{
    const {item} = props
    const [display,setDisplay] = useState(true)

    const handleToggle = (e) =>{
        e.preventDefault();
        setDisplay(!display)
        return display ? document.getElementsByClassName('tests')[e.target.id-1].style.display = 'block'
                       : document.getElementsByClassName('tests')[e.target.id-1].style.display = 'none'
    }

    return (
        <a href='/' className='col-1' onClick={(e)=>handleToggle(e)}>
            {
                display ? <i className="fas fa-plus" id={item.id}></i>
                        :<i className="fas fa-minus" id={item.id}></i>
            }
        </a>
    );
}

export default Button;