
export const Poll = ({poll,handleAnswer,qIdx})=>{

    //calculate percentage
    const calcResult = (poll,ai)=>{
        let percentage = 0;
        if(ai == poll.selectedAnswer){
            percentage = Math.round(
                (poll.answerWeight[ai]+1) * 100 / (poll.totalCount+1)
            )
        }else{
            percentage = Math.round(
                (poll.answerWeight[ai] * 100 / (poll.totalCount+1))
            )
        }
        return percentage;
    }
    
    return(  
        <div className="poll_app">
            <div className="question">{poll.question}</div>
            <div className="answers">
                {poll.answers.map((answer, ai) =>
                    <div key={ai} className={`answer ${poll.selectedAnswer === ai ? 'selected' : ''}`}
                    onClick={()=> handleAnswer(ai,qIdx)}
                    >{answer}
                 <span className="percentage-bar" style={{ width: `${calcResult(poll,ai)}%` }}></span>
                    <span className="percentage-value"> 
                    {`${calcResult(poll,ai)}%`}             
                    </span>
                    </div>
                )}
            </div>
        </div>
    )
};