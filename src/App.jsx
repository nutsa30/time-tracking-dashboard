
import './App.css'
import TimeTracker from './components/TimeTracker';
import TimeContextProvider from './Context.jsx/TimeContext';




function App() {
    return (
    <>
   
     <TimeContextProvider>
        
        <div style={{
            minHeight:"100vh",
            display:"flex",
            alignItems:'center'
          }}>
          <TimeTracker/>
        </div>

     </TimeContextProvider>
    
  

   

   
    
    </>
    );
 
}

export default App
