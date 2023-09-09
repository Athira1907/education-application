import React from 'react'
import './Questions.css';
import { useState } from 'react';

function Questions() {

const [selected,setSelected]=useState(null)


// jssx

const toggle=(i)=>{
if(selected==i){
    return setSelected(null)
}

setSelected(i)
}


// arraay of objeccts
const data=[
    {
        question:1,
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
              
    },
    {
        question:2,
        answer:' consectetur adipisicing elit. Illo maiores quam, quos praesentium ipsa maxime fugit eveniet aliquid'
    },
    {
        question:3,
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit Illo maiores quam, quos praesentium ipsa maxime fugit'
    },
    {
        question:4,
        answer:'quos praesentium ipsa maxime fugit eveniet aliquid explicabo reprehenderit aut voluptatum dignissimos natus perspiciatis,'
    },
    {
        question:5,
        answer:'Illo maiores quam, quos praesentium ipsa maxime fugit eveniet aliquid explicabo reprehenderit aut voluptatum dignissimos natus perspiciatis'
    }
]




  return (
    <>
   
   <div className="wrapper">
   <h2>Frequently Ask Question</h2>
    <div className="accordion">
{
    data.map((item,i)=>(
        <div className="item" onClick={()=>toggle()} key={i}>
           <div className="title">
           <h3>{item.question}</h3>


           {/* The conditional (ternary) operator is the only JavaScript operator that takes three operands:
            a condition followed by a question mark (?), 
            then an expression to execute if the condition is truthy followed by a colon (:),
            and finally the expression to execute if the condition is falsy.  */}


           <span>{selected==i ?'-' : '+'}</span>    
           </div>
 <div className="content-3">
        {item.answer}
       </div>
        </div>
       
    ))
}
    </div>
    
    </div> 
    
    </>
  )
}

export default Questions