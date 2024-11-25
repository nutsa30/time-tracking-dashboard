import { useContext } from 'react'
import ProfilIMg from '../../images/image-jeremy.png'
import { TimeContext } from '../Context.jsx/TimeContext'

const timesArr = ["daily", "weekly", "monthly"]


const PersonInfo = () => {
  const { time, setTime } = useContext(TimeContext)

  return (
    
      <div className='person-card-container'>
        <div className='profile-card'>
          <img src={ProfilIMg} alt="Jeremy Robson" />
          <small className='small'>Report for</small>
          <h2 className='h2'>Jeremy Robson</h2>
        </div>

        <div className='profile-card-times'>
          {timesArr.map((timeInterval) => {
            return(
            <p 
              key={timeInterval} 
              style={{
                color: time === timeInterval ? "white" : "rgba(112, 120, 201, 1)"
              }}
              onClick={() => setTime(timeInterval)}
              
              className='profile-card-time'>{timeInterval}
              </p>
          )
})}
        </div>
      </div>
    
  )
}

export default PersonInfo

