import { useContext } from 'react'
import DotImg from '../../images/icon-ellipsis.svg'
import { TimeContext } from '../Context.jsx/TimeContext'





const ToDoCard = ({activityObj}) => {
   const { time, setTime } = useContext(TimeContext)
   
  
return (
 

<div className='to-do-card'>

    
    <div className='back-image' 
     style={{ backgroundColor: activityObj.backgroundColor }}
    
    >
      <img src={activityObj.image} alt="" />
    </div>


  <div className='info-card' >

  <div className='to-do-name'>
    <p>{activityObj.title}</p>
    <img src={DotImg} alt="" />
 </div>


  <div className='to-do-hours'>
    <h2>{activityObj.timeframes[time].current}hrs</h2>
    
       <small className='hour-small'>
         Last {time === "daily" ? "day" : time === "weekly" ? "week" : "month"} - {activityObj.timeframes[time].previous}hrs
         </small>
   </div>




    </div>



</div>


    
  )
}

export default ToDoCard

