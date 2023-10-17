import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
// import { useState } from 'react';
import { StatisticSet } from './statistic/statistic';
import { Title } from './title/title';
import { Container, Statictic } from './app.styled';
import { useState } from 'react';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onAddFeedback = value => {
    if (value === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (value === 'neutral') {
        setNeutral(prevState => prevState + 1);  
    }
    if (value=== 'bad') {
       setBad(prevState=>prevState + 1)  
    }
    }
    
  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback
    };
    
  const countPositiveFeedbackPercentage = () => {
    let feedbackPercentage = 0;
    if (good === 0) {
      return feedbackPercentage = 0;
    }
     else{
      feedbackPercentage = Math.round((100 / countTotalFeedback()) * good);
      return feedbackPercentage
    }
    }
  return (
    <Container>
      <Title />
      <FeedbackOptions onAddFeedback={onAddFeedback}
        options={['good', 'neutral', 'bad']} />
      <Statictic> Statistic
        <StatisticSet
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </Statictic>
    </Container>
        
  )
}
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
  
//      onAddFeedback = value=> {
//       this.setState(prevState => ({
//         [value]: prevState[value] + 1,
//       }));
//   };
  

//     countTotalFeedback = () => {
//     const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
//     return totalFeedback
//   }
 
//   countPositiveFeedbackPercentage = () => {
//     let feedbackPercentage = 0;
//     if (this.state.good === 0) {
//       return feedbackPercentage = 0;
//     }
//      else{
//       feedbackPercentage = Math.round((100 / this.countTotalFeedback()) * this.state.good);
//       return feedbackPercentage
//     }
//     }
  
//     render()
//     {
     
      
//     }
   
// }

