import React,{useEffect, useState} from 'react';
import heart from './heart.png'
import lo from './lo.jpg'
import './Letter.css'
import image from './image.jpeg'
import book from './book.png'
import propose from './propose.png'
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
          imgEle.style.bottom = `${(Math.random(-100)*-150)}px`
          imgEle.style.transform=`translateX(${Math.random(100)*size.width-150}px)`
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
              <svg id="f38ee091-c82c-4da1-851f-4c077abd9110" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1068" height="831.71426" viewBox="0 0 1068 831.71426"><title>online wishes</title><path d="M904.08458,343.52969C859.16819,166.90825,703.96793,39.41226,521.7964,34.29851,425.48777,31.595,324.14421,63.5363,250.35863,175.31049c-131.89969,199.80845,8.10555,337.88223,105.7135,403.49213a610.75776,610.75776,0,0,1,126.24112,113.4651c65.931,78.23772,192.76719,175.45908,343.82337,23.12816C935.62233,604.98624,934.00333,461.177,904.08458,343.52969Z" transform="translate(-66 -34.14287)" fill="#f2f2f2"/><path d="M1134,382.85713c0,45.83964-37.16037,119-83,119s-83-73.16036-83-119a83,83,0,1,1,166,0Z" transform="translate(-66 -34.14287)" fill="#ff6584"/><path d="M1054.074,504.80854c-10.43048,3.59136-12.92756,17.81494-9.33986,28.24668s11.18624,19.08463,15.00958,29.43232a88.19944,88.19944,0,0,1,3.74052,16.04114c2.18414,12.981,4.37428,26.19026,2.69137,39.24565-1.59646,12.38466-6.614,24.06061-12.21177,35.22275a329.51138,329.51138,0,0,1-39.3229,60.69117" transform="translate(-66 -34.14287)" fill="none" stroke="#2f2e41" stroke-width="2"/><path d="M1059,509.85713q-8-5.13386-16,0v-16h16Z" transform="translate(-66 -34.14287)" fill="#ff6584"/><path d="M1043.04193,501.51827a17.60008,17.60008,0,0,0,16.02856-.06574" transform="translate(-66 -34.14287)" fill="none" stroke="#2f2e41" stroke-width="2"/><ellipse cx="1019.5" cy="313.71426" rx="17.5" ry="21" fill="#fff" opacity="0.4"/><path d="M66,369.85713c0,45.83964,37.16037,119,83,119s83-73.16036,83-119a83,83,0,0,0-166,0Z" transform="translate(-66 -34.14287)" fill="#ff6584"/><path d="M145.926,491.80854c10.43048,3.59136,12.92756,17.81494,9.33986,28.24668s-11.18624,19.08463-15.00958,29.43232a88.19944,88.19944,0,0,0-3.74052,16.04114c-2.18414,12.981-4.37428,26.19026-2.69137,39.24565,1.59646,12.38466,6.614,24.06061,12.21177,35.22275a329.51138,329.51138,0,0,0,39.3229,60.69117" transform="translate(-66 -34.14287)" fill="none" stroke="#2f2e41" stroke-width="2"/><path d="M141,496.85713q8-5.13386,16,0v-16H141Z" transform="translate(-66 -34.14287)" fill="#ff6584"/><path d="M156.95807,488.51827a17.60008,17.60008,0,0,1-16.02856-.06574" transform="translate(-66 -34.14287)" fill="none" stroke="#2f2e41" stroke-width="2"/><ellipse cx="48.5" cy="300.71426" rx="17.5" ry="21" fill="#fff" opacity="0.4"/><path d="M1074,734.85713c0,47.22035-222.06676,131-496,131s-470-169.77965-470-217,196.06676,46,470,46S1074,687.63679,1074,734.85713Z" transform="translate(-66 -34.14287)" fill="#3f3d56"/><path d="M1074,734.85713c0,47.22035-222.06676,131-496,131s-470-169.77965-470-217,196.06676,46,470,46S1074,687.63679,1074,734.85713Z" transform="translate(-66 -34.14287)" opacity="0.1"/><path d="M1074,734.35713c0,47.22035-222.06676,85.5-496,85.5s-470-123.77965-470-171,196.06676,0,470,0S1074,687.13679,1074,734.35713Z" transform="translate(-66 -34.14287)" fill="#3f3d56"/><path d="M502.19027,601.28838,492.1456,665.41974s-49.4507,26.27068-14.68068,27.04335,198.57544,0,198.57544,0,31.67935,0-18.544-27.816l-10.04467-67.222Z" transform="translate(-66 -34.14287)" fill="#2f2e41"/><path d="M470.47028,691.76723c7.89666-7.02631,21.67529-14.34748,21.67529-14.34748l10.04468-64.1314,145.26141.13665,10.04468,63.22205c11.71179,6.48657,18.967,11.45935,23.21142,15.27338,6.4505-1.47175,13.4997-6.941-23.21142-27.27338L647.45166,597.425l-145.26141,3.86335-10.04468,64.1314S450.59247,687.49764,470.47028,691.76723Z" transform="translate(-66 -34.14287)" opacity="0.1"/><rect x="180.8238" y="120.15761" width="654.449" height="455.87357" rx="23.01005" fill="#2f2e41"/><rect x="202.84481" y="144.49663" width="610.40698" height="341.51884" fill="#3f3d56"/><circle cx="508.0483" cy="133.67929" r="3.86334" fill="#f2f2f2"/><path d="M901.27281,547.20168V587.164a23.00716,23.00716,0,0,1-23.01005,23.01H269.83385a23.00716,23.00716,0,0,1-23.01-23.01V547.20168Z" transform="translate(-66 -34.14287)" fill="#2f2e41"/><polygon points="678.808 700.044 678.808 707.771 263.113 707.771 263.113 701.59 263.685 700.044 273.93 672.228 670.308 672.228 678.808 700.044" fill="#2f2e41"/><path d="M904.7807,726.62267c-.7572,3.23743-3.61608,6.65275-10.07556,9.88244-23.18,11.59-70.31271-3.09066-70.31271-3.09066s-36.31535-6.18134-36.31535-22.40735a28.97618,28.97618,0,0,1,3.18339-1.893c9.74552-5.15588,42.05851-17.87845,99.35285.5387a23.89452,23.89452,0,0,1,10.8907,7.13693C903.82573,719.50754,905.64608,722.95493,904.7807,726.62267Z" transform="translate(-66 -34.14287)" fill="#2f2e41"/><path d="M904.7807,726.62267c-28.37231,10.87148-53.66169,11.68272-79.6156-6.34356-13.089-9.08658-24.98034-11.33506-33.90463-11.165,9.74552-5.15588,42.05851-17.87845,99.35285.5387a23.89452,23.89452,0,0,1,10.8907,7.13693C903.82573,719.50754,905.64608,722.95493,904.7807,726.62267Z" transform="translate(-66 -34.14287)" opacity="0.1"/><ellipse cx="803.20712" cy="683.04557" rx="10.04467" ry="3.09067" fill="#f2f2f2"/><circle cx="508.0483" cy="544.73817" r="14.68067" fill="#f2f2f2"/><polygon points="678.808 700.044 678.808 707.771 263.113 707.771 263.113 701.59 263.685 700.044 678.808 700.044" opacity="0.1"/><path d="M937.074,338.80854c-10.43048,3.59136-12.92756,17.81494-9.33986,28.24668s11.18624,19.08463,15.00958,29.43232a88.19944,88.19944,0,0,1,3.74052,16.04114c2.18414,12.981,4.37428,26.19026,2.69137,39.24565-1.59646,12.38466-6.614,24.06061-12.21177,35.22275a329.51138,329.51138,0,0,1-39.3229,60.69117" transform="translate(-66 -34.14287)" fill="none" stroke="#2f2e41" stroke-width="2"/><path d="M1017,216.85713c0,45.83964-37.16037,119-83,119s-83-73.16036-83-119a83,83,0,0,1,166,0Z" transform="translate(-66 -34.14287)" fill="#ff63ec"/><path d="M942,343.85713q-8-5.13386-16,0v-16h16Z" transform="translate(-66 -34.14287)" fill="#ff63ec"/><path d="M926.04193,335.51827a17.60008,17.60008,0,0,0,16.02856-.06574" transform="translate(-66 -34.14287)" fill="none" stroke="#2f2e41" stroke-width="2"/><ellipse cx="902.5" cy="147.71426" rx="17.5" ry="21" fill="#fff" opacity="0.4"/><polygon points="603.607 288.552 603.607 375.098 580.728 421.257 580.728 421.262 580.003 422.719 519.433 418.719 496.149 417.179 442.109 413.609 442.109 310.085 496.149 311.609 520.315 312.292 581.453 314.019 603.607 288.552" fill="#ff63ec"/><polygon points="603.607 293.658 603.607 375.098 598.017 386.374 598.017 386.378 592.285 397.936 592.285 397.94 580.728 421.257 582.02 334.711 582.281 317.253 593.271 305.095 593.271 305.091 598.062 299.791 603.607 293.658" opacity="0.1"/><polygon points="606.713 265.57 606.713 295.799 603.607 300.747 598.058 309.588 593.143 317.419 582.281 334.724 582.02 334.711 437.347 327.27 437.347 297.455 437.712 297.062 454.984 278.365 461.236 271.599 472.545 259.358 606.713 265.57" fill="#ff63ec"/><polygon points="582.281 304.909 582.281 334.724 437.347 327.27 437.347 297.455 437.712 297.062 582.281 304.909" opacity="0.1"/><polygon points="606.713 265.57 606.713 295.799 582.281 334.724 582.281 304.909 606.713 265.57" opacity="0.15"/><polygon points="598.075 279.479 598.062 299.791 598.058 309.588 598.017 386.374 598.017 386.378 592.285 397.936 593.143 317.419 593.271 305.095 593.271 305.091 593.466 286.9 454.984 278.365 461.236 271.599 598.075 279.479" fill="#2f2e41"/><polygon points="530.105 280.477 520.402 301.55 520.315 312.292 519.433 418.719 496.149 417.179 496.149 300.147 508.572 280.477 530.105 280.477" fill="#2f2e41"/><path d="M564.15,316.03808a30.76616,30.76616,0,0,1-17.35419.60923,6.97459,6.97459,0,0,1-3.04413-1.41166,7.88417,7.88417,0,0,1-1.88293-3.73055,29.47759,29.47759,0,0,1-1.66243-8.92937c.06958-3.0398,1.23264-6.21226,3.71261-7.9715a8.77491,8.77491,0,0,0,1.41038-1.05926,5.84862,5.84862,0,0,0,1.09121-2.21685c1.6965-5.06057,4.98527-10.40433,10.26081-11.2144,4.86734-.74739,9.29708,2.65193,13.04732,5.84338l8.23089,7.0045a12.98674,12.98674,0,0,1,24.21555-.32985,46.0605,46.0605,0,0,1,18.31061-12.56387c1.55934-.58109,3.39076-1.0542,4.81217-.1889a5.52129,5.52129,0,0,1,1.91528,2.56858,39.55934,39.55934,0,0,1,3.56809,15.6055,2.731,2.731,0,0,1,3.17368,1.09482,7.20175,7.20175,0,0,1,1.05633,3.44006,48.686,48.686,0,0,1,.32819,5.6676c-.001,1.99729-.18614,4.15469-1.48788,5.6695-1.68208,1.95739-4.58626,2.16439-7.16637,2.22578,1.24241,1.10268.6358,3.3234-.73838,4.25674s-3.15162.9505-4.81271.93433c-6.40383-.06234-13.21581-.24439-18.54265-3.79933-2.10327-1.40364-3.86487-3.27295-5.97365-4.66844-5.16859-3.42027-11.65786-3.58374-17.64064-3.30072C573.57747,309.82884,569.29137,314.31626,564.15,316.03808Z" transform="translate(-66 -34.14287)" fill="#2f2e41"/><path d="M562.977,314.61991s-53.41847,7.45374-60.87221,39.75328l11.18061-1.65639,7.86784,14.07929s8.28193-31.47135,32.71364-38.92509,33.12773-8.696,33.12773-8.696,16.978,4.141,32.29954,53.41847l8.696-12.0088,15.32158,3.31277s-11.18061-38.511-41.40967-49.2775Z" transform="translate(-66 -34.14287)" fill="#2f2e41"/></svg>
              
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

          <h2>Note:</h2>
          <h3 id="note">
            Decision entha twaraga antha better😊😍.
            Hey! Please Whatever your Decision.Please tell me your decision where Nobody near us including your friends🙏🙏🙏. Im introvert dont forget that😂😂. Please Please Im begging you Dont share this Link to others.Please this should be between us 🙏🙏🙏. Please Im begging you😰😰😰🙏🙏🙏
          </h3>
          

            
      </div>
      <p></p>
      </div>
     </> 
        
    )
}
export default Letter