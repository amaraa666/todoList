import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React ,  { useState } from 'react';
import Modal from './component/modal';


function App() {
  const [list , setList] = useState('');
  const [arr , setArr] = useState([]);
  const [onDone , setOnDone] = useState(0);
  const [myVal , setMyVal] = useState(0);
  const [myMod , setMyMod] = useState(false);



  function myID(){
    let number = '1234567890';
    let letter = 'ABCDEFGHIJ';
    let newNumber = 
    number.split('')[Math.floor(Math.random()*10)]+
    number.split('')[Math.floor(Math.random()*10)];
    let newLetter = 
    letter.split('')[Math.floor(Math.random()*10)]+
    letter.split('')[Math.floor(Math.random()*10)];
    let ID = newLetter + newNumber
    return ID
  }
  const drawList = ()=>{
    const myObj = {
      id: myID(),
      value: list,
      isDone: false
    }
    const newArr = [...arr];
    if(list.length === 0){
      window.alert("Utga oruulna uu!");
    }else{
      if(myVal !== 0){
        newArr.map((c)=>{
          if(c.id === myVal){
            c.value = list
            setMyVal(0);
            setList('');
          }
        })
      }else{
        newArr.push(myObj);
        console.log(newArr);
        setArr(newArr);
        setList('');
      }
    }
  }
  function deleteList(id){
    arr.map((val)=>{
      if(val.id === id){
        let newArr=[...arr];
        newArr.splice(newArr.indexOf(val) , 1)
        setArr(newArr)
        console.log(newArr)
        val.isDone = false
        setList('')
        setMyVal(0)
      }
    })
    onDoneTotal()
  }
  function editBtn(id){
    arr.map((c)=>{
      if(c.id === id){
        setList(c.value)
        setMyVal(c.id)
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
  function myModal(){
    setMyMod(!myMod);
  }
  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center">
        <h1>To do list</h1>
        <div className='Totals d-flex gap-3'>
          <h4>Total: {arr.length}</h4>
          <h4 className='text-success'>DoneTotal: {onDone}</h4>
        </div>
        <div className='myInputSection col-3 d-flex justify-content-center gap-2'>
          <input type='text' placeholder='Add ur task' value={list} onChange={(e)=>setList(e.target.value)}/>
          <input type='hidden' value={myVal}/>
          <button onClick={drawList} className='bg-dark text-white btn'>add+</button>
          <button onClick={myModal} className='bg-dark text-white btn'>Modal</button>
        </div>
        <div className='myList col-3 d-flex flex-column justify-content-center'>
        {arr.map((c)=>{
          return (
            <div className='myList d-flex justify-content-center'>
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
      <Modal
      modal={myMod}
      list={list}
      myVal={myVal}
      drawList={drawList}
      setList={setList}
      myModal={myModal}
      />
    </>
  );
}

export default App;
