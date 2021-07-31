import React, {useState, useEffect} from 'react';
import Test from './test'
import Button from './button'

const Profile =(props)=>{
    const {item, callback} = props
    const [tag,setTag] = useState([])
    const [studentCurrentTag,setStudentCurrentTag]=useState({
        ...item,
        'tag':tag
    })

    const addTag = (e) =>{
        const {value} = e.target
        e.preventDefault();
        if(e.key==='Enter'){
            setTag([...tag,value.toString()]);
            return e.target.value = ''; 
        }        
    }
    
    useEffect(()=>{
        setStudentCurrentTag((pre)=>({
            ...pre,
            'tag':tag
        }))
    },[tag])

    callback(studentCurrentTag);

    return (
        <div>
            <hr />
            <div className='profile'>
                <div className="row">
                    <img className='photo col-3' src={item.pic} alt={item.id}/>
                    <div className='col-8'>
                        <p className='name'>{item.firstName} {item.lastName}</p>
                        <div className='indent'>
                            <div className='info'>
                                <p className='text'>Email: {item.email} </p>
                                <p className='text'>Company: {item.company} </p>
                                <p className='text'>Skill: {item.skill} </p>
                                <p className='text'>Average: {item.grades.reduce((a,b)=>parseFloat(a)+parseFloat(b),0) / item.grades.length}% </p>
                            </div>
                            <Test item ={item}/>
                            <div>
                                {tag.map((item,index)=><label key={`${index}-{item.id}`}>{item}</label>)}
                            </div>
                            <input placeholder='Add a tag' className='tag' onKeyUp ={addTag} name='tag'></input>
                        </div>
                    </div>
                    <Button item={item}/>
                </div>    
            </div>
        </div>
    );
}

export default Profile;