import React,{useEffect, useState} from 'react';
import heart from './heart.png'
import './Letter.css'
function Letter(){
 let [size]=useState({height:window.innerHeight,width:window.innerWidth})
  useEffect(()=>{
      console.log(Math.floor(Math.random(size.width).toString())+"px")
    let body = document.querySelector('.letter')
      for(let i=0;i<30;i++){
        let imgEle= document.createElement('img')
          imgEle.src = heart
          body.appendChild(imgEle)
          imgEle.style.position = 'absolute'
          imgEle.style.transform=`translateX(${Math.random(100)*size.width-150}px)`
          setTimeout(()=>{
            imgEle.classList.add('fly')
          },1000)
      }


    
  })
    return (
    
        <div className='letter'>

       
        <h1>hello world</h1>
        {/* <img src={heart} className='fly' alt="heart"/> */}
      </div>
        
    )
}
export default Letter