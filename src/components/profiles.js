import React from 'react';
import '../styles/style.css'
import Profile from './profile'

const Profiles =(props)=>{
    const {data, callback} = props
    return(
        <div>
            <div className='profiles'>
            { data.map((item,key)=> <Profile item ={item} callback={callback} key={key}/>) }
            </div>
        </div>
    );
}
export default Profiles;