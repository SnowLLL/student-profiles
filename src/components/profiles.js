import React, {useState, useEffect} from 'react';
import DATA from '../lookup/constants'
import { fetchData } from '../lookup/fetchData';
import '../styles/style.css'

// Part 1
// to fetch Object data, and present the information on the screen.
const Profiles =()=>{
    const [data,setData]=useState()

    useEffect(()=>{
        fetchData(DATA.URL)
        .then(response=>{
            setTimeout(()=>{
                setData(Object.values(response.students))
            },100)
        })
    },[]);

    var seg = ''
    var profileSeg = ''
    for (const key in data){
        const arr = data[key].grades
        const average = arr.reduce((a,b)=>parseFloat(a)+parseFloat(b),0) / arr.length;
        profileSeg =`<hr>
                    <div class='container'>
                        <div class="row align-items-start">
                            <img class='photo col-3' src=${data[key].pic} alt=${data[key].id}/>
                            <div class='col-9'>
                                <p class='name'>${data[key].firstName} ${data[key].lastName}</p>
                                <div class='info'>
                                    <p class='text'>Email: ${data[key].email} </p>
                                    <p class='text'>Company: ${data[key].company} </p>
                                    <p class='text'>Skill: ${data[key].skill} </p>
                                    <p class='text'>Average: ${average}% </p>
                                </div>
                            </div>
                        </div>    
                    </div>`
        seg += profileSeg 
    }

    const input = `<input placeholder='Search by Name' id='input' ></input>`
    document.getElementById('root').innerHTML = input + seg;

    return(
        <div>
            {/* <input placeholder='Search by Name' className='text' ></input>
            <h1>Student Profiles</h1> */}
        </div>
    );
}

export default Profiles;