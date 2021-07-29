import React, {useState, useEffect} from 'react';
import DATA from '../lookup/constants'
import { fetchData } from '../lookup/fetchData';
import '../styles/style.css'

// Part 1
// to fetch Object data, and present the information on the screen.
const Profiles =()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        fetchData(DATA.URL)
        .then(response=>{
            setData(response.students)
        })
    },[]);

    return(
        <div>
            <input placeholder='Search by Name' id='input' ></input>
            {
                data.map((item,key)=>
                <div key={key}>
                    <hr />
                    <div className='container'>
                        <div className="row align-items-start">
                            <img className='photo col-3' src={item.pic} alt={item.id}/>
                            <div className='col-9'>
                                <p className='name'>{item.firstName} {item.lastName}</p>
                                <div className='info'>
                                    <p className='text'>Email: {item.email} </p>
                                    <p className='text'>Company: {item.company} </p>
                                    <p className='text'>Skill: {item.skill} </p>
                                    <p className='text'>Average: {item.grades.reduce((a,b)=>parseFloat(a)+parseFloat(b),0) / item.grades.length}% </p>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                )
            }
        </div>
    );
}

export default Profiles;