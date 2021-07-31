import React, {useState, useEffect} from 'react';
import DATA from '../lookup/constants'
import { fetchData } from '../lookup/fetchData';
import '../styles/style.css'
import Profile from './profile'

// Part 1
// to fetch Object data, and present the information on the screen.
const Profiles =()=>{
    const [data,setData]=useState([])
    const [inputName, setInputName] = useState('')
    const [inputTag, setInputTag] = useState('')

    useEffect(()=>{
        fetchData(DATA.URL)
        .then(response=>{
            setData(response.students)
        })
    },[]);

    const searchTagHandler = (e) =>{
        setInputTag(e.target.value)
    }

    return(
        <div>
            <div className='searchSection'>
                <input placeholder='Search by Name' id='searchByName' onChange={(e)=>setInputName(e.target.value)}></input>
                <input placeholder='Search by Tag' id='searchByTag' onChange={searchTagHandler}></input>
            </div>
            <div className='profiles'>
            {
                data.filter((item)=>
                    inputName==='' ? item
                                   : item.firstName.toLowerCase().includes(inputName.toLowerCase()) || item.lastName.toLowerCase().includes(inputName.toLowerCase())
                                        ? item : ''
                )
                .filter((item)=>
                    inputTag ==='' ? item
                                : item.tag.toLowerCase().includes(inputTag.toLowerCase()) || item.tag.toLowerCase().includes(inputTag.toLowerCase())
                                        ? item : ''
                )
                .map((item,key)=> <Profile item ={item} key={key}/>)
            }
            </div>
        </div>
    );
}

export default Profiles;