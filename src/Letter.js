import React,{useEffect, useState} from 'react';
import heart from './heart.png'
import lo from './lo.jpg'
import './Letter.css'
import image from './image.jpeg'
import book from './book.png'
import propose from './propose.png'
import  undraw from './computer.svg'
function Letter(){
 let [size]=useState({height:window.innerHeight,width:window.innerWidth})
  useEffect(()=>{
    let body = document.querySelector('.letter')
      for(let i=0;i<30;i++){
        let imgEle= document.createElement('img')
          imgEle.src = heart
          body.appendChild(imgEle)
          imgEle.style.position = 'absolute'
          imgEle.style.bottom = `${(Math.random(-100)*-150)}px`
          imgEle.style.transform=`translateX(${Math.random(100)* size.width}px)`
          setTimeout(()=>{
            imgEle.classList.add('fly')
          
          },200)
      }

 
    
  })
    return (
    <>
        <div className='letter'>
      </div>
      <div className="main">
      <div className='time'>
         <h5>Date:  {`${new Date().getDate()} : ${new Date().getMonth()} : ${new Date().getFullYear()}`}</h5>
         <h5>Place: Bhimavaram</h5>
      </div>
      <div className="letterR">
          <h1>To,<br/>Ramya</h1>
            <br/>
            <br/><br/>
            <h3>Hey! Hi,Long Time huh!.
              Im Introvert.sorry,sorry😜😜 Im Charan.Adhe 2 years ga follow avuthunna ga. Actually, Im a Introvert Type Person.Andhuke Intha time pattindhi.Ela chapatav kuda naaku bayangane undhi, But Idhe nee last year antaga adhi marchipoyanu.Andhuke yedhi ayithe adhi ayindhi ani cheppi,Neekosam ee website create chesa. Yeah! I created this. Pretty cool Right!!
              </h3>
              <img src={undraw}  id="book" alt="undraw"/>
             <h3>Actually,ninnu firsrt time Bus lochi diguthanappudu chusa,pink dress and squares exactly like this website design. That was my 3rd day I think. Anyway, a roju nunchi okkasari kuda clg manaledhu telusa. Sorry, ela anacho ledho kuda telidhu, But ne height chusi nuvvu junior amo anukunna, two days ayyaka telisindhi nuvvu senior ani.But andhukoo nuvvu naalu junior lage kanipisthav(Sorry)<br/>
             neelu Tridha choudary telusa ade (surya vs surya lo heroine). Dont google it.Here is her Photo.
             </h3>
             <img src={lo} alt="l0" className="image"/>
            <h3>Sorry , sorry. Here it is</h3>
            <img src={image} alt="l0" className="image"/>
            <h3>Sorry, Kodhiga confuse ayya. Ante okale unde saraki🧐🧐. Avunu naake okkadikey ala anipisthundha,ninnu chusina valla andharaki alane untundha.Na daggara chala quotes kuda unnay"Sky is blue, My love is true" lantivie kadhule manchive.Like "if you live 100 days, I would die at 99th day".You know what I mean right? I know You are topper. Always study anta ga🤯🤯🤯.</h3>
            <img src={book} alt="book" id="book"/>
          <h3>chala telivaina ammai kabatti decision correct tisukuntav ani telsu. Acceptance or Reject Whatever the decision is.</h3>
          <br/>
          <h4>I RESPECTED THAT .BECAUSE IT IS YOUR LIFE 👍👍</h4>
          <img src={propose} alt="book" id="book"/>

         
          
          

            
      </div>
      <h2>Note:</h2>
      <h3 id="note">
            Decision entha twaraga chepthe antha better😊😍.
            Hey! Please Whatever your Decision.Please tell me your decision where Nobody near us including your friends🙏🙏🙏. Im introvert dont forget that😂😂. Please Please Im begging you Dont share this Link to others.Please this should be between us 🙏🙏🙏. Please Im begging you😰😰😰🙏🙏🙏
          </h3>
          <div className='signature'>
            <h3>Thank You</h3>
            <div>
            <h5>Your sincere Follower</h5>
            <h2>Ch.L.Charan</h2>
            </div>
           

          </div>

      
      </div>
     </> 
        
    )
}
export default Letter