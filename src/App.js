import {Poll} from './components/poll';
import './App.css'
import { useState } from 'react';

function App(props) {
  //Handle Duplicate questions.
  
  const [polls, setPolls] = useState(() => {
    if (props.polls) {
      return props.polls.filter((poll, index, self) => 
        index === self.findIndex((t) => t.id === poll.id)
      );
    }
    return [];
  });

//set selected answer
  const handleAnswer = (ai,qi)=>{
    let updatedPolls = polls.map((poll) =>{
      if(poll.id === qi){
        return { ...poll, selectedAnswer: +ai}
      }else{
        return poll
      }
    });
    setPolls(updatedPolls);
  }

  return (
    <>
    {polls.length > 0 ? 
      polls.map((item,qi) => {
        return <Poll poll={item} key={qi} handleAnswer={handleAnswer} qIdx={item.id}/>
      }) : 
      <div
      style={{display:'flex',alignItems:'center',justifyContent:'center', height:'100vh'}}
      >
      <strong style={{fontSize:'20px'}}>No Polls for now...</strong>  
      </div>
    }
    </>
  )
}

export default App
