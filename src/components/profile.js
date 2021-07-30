import React, {useState} from 'react';
import Test from './test'

const Profile =(props)=>{
    const {item} = props
    const [display,setDisplay] = useState(false)

    const handleToggle = (e) =>{
        e.preventDefault();
        setDisplay(!display)
        return display ? document.getElementsByClassName('tests')[e.target.id-1].style.display = 'block'
                       : document.getElementsByClassName('tests')[e.target.id-1].style.display = 'none'
    }

    return (
        <div>
            <hr />
            <div className='profile'>
                <div className="row">
                    <img className='photo col-3' src={item.pic} alt={item.id}/>
                    <div className='col-8'>
                        <p className='name'>{item.firstName} {item.lastName}</p>
                        <div className='info'>
                            <p className='text'>Email: {item.email} </p>
                            <p className='text'>Company: {item.company} </p>
                            <p className='text'>Skill: {item.skill} </p>
                            <p className='text'>Average: {item.grades.reduce((a,b)=>parseFloat(a)+parseFloat(b),0) / item.grades.length}% </p>
                        </div>
                        <Test item ={item}/>
                    </div>
                    <a href='/' className='col-1' onClick={(e)=>handleToggle(e)}>
                        <i className="fas fa-plus" id={item.id}></i>
                    </a>
                </div>    
            </div>
        </div>
    );
}

export default Profile;