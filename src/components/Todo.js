import './Todo.css'
import React,{useState} from 'react'
import img from './wrong.png'



export default function Todo() {
    const [inputitem, setinputitem] = useState("")
    const [itemarray, setitemarray] = useState([])
      const [style, setstyle] = useState(null)
      const [main, setmain] = useState(null)
      const [header, setheader] = useState(null)
      const [head, sethead] = useState(null)
      const [input, setinput] = useState(null)
      const [value, setvalue] = useState(null)
    const itemevent=(event)=>{
        setinputitem(event.target.value)
    }
    const additem=()=>{
        setitemarray((item) => {
            return [...item,inputitem]
        })
    }
    const deletitem=(id)=>{
       setitemarray((old)=>{
        return old.filter((arrel,index)=>{
            return id!==index
        })
       })
    }
    const dark=()=>{
       setstyle({
        background: "#000000e0"
       })
       setmain({
           backgroundColor:'black',
           boxShadow: "0 0 10px  white",
           mozBoxShadow: "0 0 10px white",
           webkitBoxShadow:" 0 0 10px  white",
            oBoxShadow: "0 0 10px  black",
           
       })
       setheader({
           backgroundColor:"#000000e0",
           borderRadius:"40%"
       })
       sethead({
           color:"white"
       })
       setinput({
        borderBottom: "2px solid white",
        color:'white'
       })
       setvalue({
        color:"white"
       })
    }
    const peach=()=>{
        setstyle({
            background: "#6699CC"
           })
           setmain({
               backgroundColor:'#7ec8e3',
               boxShadow: "0 0 10px  white",
               mozBoxShadow: "0 0 10px white",
               webkitBoxShadow:" 0 0 10px  white",
                oBoxShadow: "0 0 10px  black",
               
           })
           setheader({
               backgroundColor:"#4297a0",
           })
           sethead({
               color:"white"
           })
           setinput({
            borderBottom: "2px solid #4297a0",
            color:'#050a30'
           })
           setvalue({
            color:"black"
           })

    }
    const tan=()=>{
        setstyle({
            background: "#b68d40"
           })
           setmain({
               backgroundColor:'#d6ad60',
               boxShadow: "0 0 10px  white",
               mozBoxShadow: "0 0 10px white",
               webkitBoxShadow:" 0 0 10px  white",
                oBoxShadow: "0 0 10px  black",
               
           })
           setheader({
               backgroundColor:"#122620",
           })
           sethead({
               color:"white"
           })
           setinput({
            borderBottom: "2px solid rgb(85, 35, 1)",
            color:'rgb(85, 35, 1)'
           })
           setvalue({
            color:"rgb(85, 35, 1)"
           })
    }
    const coral=()=>{
        setstyle({
            background: "#e98980"
           })
           setmain({
               backgroundColor:'#f4b9b8',
               boxShadow: "0 0 10px  white",
               mozBoxShadow: "0 0 10px white",
               webkitBoxShadow:" 0 0 10px  white",
                oBoxShadow: "0 0 10px  black",
               
           })
           setheader({
               backgroundColor:"#d48c70",
           })
           sethead({
               color:"white"
           })
           setinput({
            borderBottom: "2px solid #C53500",
            color:'#C53500'
           })
           setvalue({
            color:"#C53500"
           })
    }
   const wheat=()=>{
    setstyle({
        background: "wheat"
       })
       setmain({
           backgroundColor:'white',
           boxShadow: "0 0 10px  white",
           mozBoxShadow: "0 0 10px white",
           webkitBoxShadow:" 0 0 10px  white",
            oBoxShadow: "0 0 10px  black",
           
       })
       setheader({
           backgroundColor:"burlywood",
       })
       sethead({
           color:"white"
       })
       setinput({
        borderBottom: "2px solid rgb(85, 35, 1)",
        color:'black'
       })
       setvalue({
        color:"black"
       })
   }
    return (
        <div className="body" style={style}>
            <div className="header">
                <h1>ToDo App</h1>
                <div className="bg-dark rounded mx-2 pallet" onClick={dark}  style={{width:'20px',height:'20px'}}></div>
                <div className="rounded mx-2 pallet" onClick={peach}  style={{background:'#6699CC',width:'20px',height:'20px'}}></div>
                <div className="rounded mx-2 pallet" onClick={wheat}  style={{background:'wheat',width:'20px',height:'20px'}}></div>
                <div className="rounded mx-2 pallet" onClick={tan}  style={{background:'#b68d40',width:'20px',height:'20px'}}></div>
                <div className="rounded mx-2 pallet" onClick={coral}  style={{background:'#e98980',width:'20px',height:'20px'}}></div>
            </div>
                <div className="main_div" style={main}>
                    <div className="heading" style={header}>
                            <h1 className="head" style={head}>ToDo List</h1><br/>
                    </div>
                    <div className="input">
                            <input type="text" style={input}  onChange={itemevent} placeholder="Add a items" />
                            <button onClick={additem} className="plus">+</button>
                    </div>
                   {itemarray.map((itemval,id)=>{
                     // return(<Todolist key={id} value={value} id={id} text={itemval}  select={deletitem}/>)  
                     return(
                         
                         <div  className="list">
                                <img onClick={()=>deletitem(id)} src={img} alt="" />
                                <li style={value} >{itemval}</li>
                         </div>
                     )  
                    })
                }
                </div>
        </div>
    )
}
