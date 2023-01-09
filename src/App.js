import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React ,  { useState } from 'react';
function App() {
  const [list , setList] = useState('');
  const [arr , setArr] = useState([]);
  const [onDone , setOnDone] = useState(0);

  const drawList = ()=>{
    const myObj = {
      id: arr.length,
      value: list,
      isDone: false
    }
    const newArr = [...arr];
    newArr.push(myObj);
    console.log(newArr);
    setArr(newArr);
    setList('');
  }
  function deleteList(id){
    arr.map((val)=>{
      if(val.id === id){
        let newArr=[...arr];
        newArr.splice(newArr.indexOf(val) , 1)
        setArr(newArr)
        console.log(newArr)
      }
    })
    onDoneTotal()
  }
  function editBtn(id){
    console.log(id)
    arr.map((c)=>{
      if(c.id === id){
        c.isDone = false
      }
    })
  }
  function Done(id){
    console.log(id)
    arr.map((c)=>{
      if(c.id === id){
          c.isDone = true
      }
    })
  }
  function isDoneFunc(id){
    const objectList = arr.map((c)=>{
      if(c.id === id){
        c.isDone = !c.isDone
      }
      return c
    })
    setArr(objectList)
    onDoneTotal()
  }
  function onDoneTotal(){
    const myFilteredList = arr.filter((co)=>{
      if(co.isDone === true){
        return (co)
      }
    })
    setOnDone(myFilteredList.length)
  }
  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center">
        <h1>ToDOLIst</h1>
        <h4>Total: {arr.length}</h4>
        <h4>DoneTotal: {onDone}</h4>
        <div className='myInputSection col-3'>
          <input type='text' placeholder='Add ur task' value={list} onChange={(e)=>setList(e.target.value)}/>
          <button onClick={drawList}>add+</button>
        </div>
        <div className='myList  col-3 d-flex flex-column'>
        {arr.map((c)=>{
          return (
            <div className='myList d-flex'>
              <input  type='checkbox' checked={c.isDone} onChange={()=>isDoneFunc(c.id)}/>
              <input value={c.value} disabled type='text'/>
              <div className='icons'>
              <i className="bi bi-trash3 text-danger" onClick={()=>deleteList(c.id)}></i>
              <i className="bi bi-pen" onClick={()=>editBtn(c.id)}></i>
              <i className="bi bi-check-lg text-success" onClick={()=>Done(c.id)}></i>
              </div>
            </div>
          )
        })}
       </div>
      </div>
    </>
  );
}

export default App;
