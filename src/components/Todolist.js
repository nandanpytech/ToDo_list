import React,{useState} from 'react'
import img from './wrong.png'

export default function Todolist(props) {
    const [state, setstate] = useState(null)
    if (props.value==="dark"){
        setstate({
            color:"white"
        })
    }
    return (

              <div  className="list">
                            <img onClick={()=>props.select(props.id)} src={img} alt="" />
                            <li style={state} >{props.text}</li>
                        </div>
        
    )
}
