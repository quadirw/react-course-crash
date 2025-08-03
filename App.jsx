import './App.css';
import Todo from "./components/Todo.jsx"
import Title from "./components/Title.jsx"
import Modal from "./components/Modal.jsx"
import React, { useState, useEffect } from 'react'
import Counter from "./components/Counter.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

// function App() {
//   const [showModal, setShowModal] = useState(false)

//   function onTodoDelete() {
//     setShowModal(true)
//     console.log("onTodoDelete()")
//   }
  
//   function confirmModal() {
//      setShowModal(false)
//   }
    
//     function cancelModal() {
//       setShowModal(false)
//     }

//     useEffect(()=> {
//       console.log('ONLY on mount')
//       setShowModal(!showModal)
//     }, [])
  
//     useEffect(() => {
//       console.log(`on mount AND on ${showModal} change`)
//       // setShowModal(!showModal)
//     }, [showModal])

//     useEffect(() => {
//       console.log('EVERY render')
//       // setShowModal(!showModal)
//     })

    
  

//   return (
//     <div>
//       <Title></Title>
//       <div>
//         <input type="text" onChange={(event) => {
//           console.log(event.target.value)
//         }}/>
//         <button onClick={() => setShowModal(true)}>Add Todo</button>
//       </div>
//       <div className="todo__wrapper">
//       <Todo onTodoDelete ={onTodoDelete} 
//       title="Finish Frontend Simplified"
//       />
//       <Todo onTodoDelete ={onTodoDelete} 
//       title="Finish Interview Section" 
//       />
//       <Todo onTodoDelete ={onTodoDelete} 
//       title="Land a $100k Job!" />
//       </div>
//       {showModal && <Modal cancelModal={cancelModal} confirmModal={confirmModal} title="Are you sure you want to delete?"  />}
//     </div>
//   );

  function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route> 
          </Routes>
        </Router>
      </div>
    )
  }

  

export default App;
