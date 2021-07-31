import React, {useState, useEffect} from 'react';
import { Profiles } from './components'
import DATA from './lookup/constants'
import { fetchData } from './lookup/fetchData'

function App() {
  const [inputName, setInputName] = useState('')
  const [inputTag, setInputTag] = useState('')
  const [data,setData]=useState([])

  useEffect(()=>{
      fetchData(DATA.URL)
      .then(response=>{
          setData(response.students)
      })
  },[]);

  const updateData = (student)=>{
    for (let i=0;i<data.length;i++){
        if(data[i].id===student.id){
            data[i].tag=student.tag;
        }
    }
}

  console.log(data)
  const filterStudent= data.filter(item=>(
    item.firstName.toLowerCase().indexOf(inputName)>-1 ||
    item.lastName.toLowerCase().indexOf(inputName)>-1
  ))
  .filter((item)=>(
    item.tag !== []
  ))

  return (
    <div className='content'>
        <div className='searchSection'>
            <input placeholder='Search by Name' id='searchByName' value={inputName} onChange={(e)=>setInputName(e.target.value)}></input>
            <input placeholder='Search by Tag' id='searchByTag' value={inputTag} onChange={(e)=>setInputTag(e.target.value)}></input>
        </div>
        <Profiles data={filterStudent} callback={updateData}/>
    </div>
  );
}

export default App;