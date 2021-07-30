import React from 'react';

const Profile =(props)=>{
    const {item} =props
    return (
        <div>
            <hr />
            <div className='list'>
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
                    </div>
                    <div className='col-1'>
                        <i className="fas fa-plus"></i>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Profile;