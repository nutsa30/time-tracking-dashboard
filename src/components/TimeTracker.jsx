import PersonInfo from "./PersonInfo"
import ToDoCard from "./ToDoCard"
import data from '../../data.json'


const TimeTracker = () => {
  return (
   <div className="time-tracker">
      <PersonInfo/>
      {
        data.map((activityObj)=>{
            return <ToDoCard key={activityObj.title} activityObj={activityObj}/>
        })
      }
    
  </div>
            
   


    
  )
}

export default TimeTracker