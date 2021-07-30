import React, {useState, useEffect} from 'react';
import DATA from '../lookup/constants'
import { fetchData } from '../lookup/fetchData';
import '../styles/style.css'
import Profile from './profile'

// Part 1
// to fetch Object data, and present the information on the screen.
const Profiles =()=>{
    const [data,setData]=useState([])
    const [input, setInput] = useState('')

    useEffect(()=>{
        fetchData(DATA.URL)
        .then(response=>{
            setData(response.students)
        })
    },[]);

    return(
        <div>
            <input placeholder='Search by Name' id='input' onChange={(e)=>setInput(e.target.value)}></input>
            {
                data.filter((item)=>
                    input==='' ? item
                               : item.firstName.toLowerCase().includes(input.toLowerCase()) || item.lastName.toLowerCase().includes(input.toLowerCase())
                                    ? item : ''
                )
                .map((item,key)=>
                        <Profile item ={item} key={key}/>
                )
            }
        </div>
    );
}

export default Profiles;