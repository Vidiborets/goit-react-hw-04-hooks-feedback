import { useState }  from "react";
import Container from './components/Container/Container.jsx'
import Counter from './components/Counter/Counter.jsx'
import Clickbate from './components/Clickbate/Clickbate.jsx'

export default function CounterList() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleCounter = (value) => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return
    }
  };

  const totalResult = () => {
    const total = good + neutral + bad;
    return total
  };
 

  const percentTotal = () => {
    const percent = Math.round((good / totalResult()) * 100)
    return percent
  };

  return (
    <Container title="Please leave feedback">
      <Clickbate
        options={['good','neutral','bad']}
        clickFedBack={handleCounter}
      />
      <Counter
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalResult()}
        percent={percentTotal()}
      />
    </Container>
  );
}









// class CounterList extends Component {
//   static defaultProps={
//     percentLot:'0',
//   }
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };
  
//   clickFedBack = (e) => {
//     this.setState({
//       [e]: this.state[e] + 1
//     });
//     }
  
//   totalResult () {
//     const { good, neutral, bad } = this.state
//     const total = good + neutral + bad;
//     return total
//   }

//   percentTotal(total) {
//     const { good } = this.state
//     const percent = Math.round((good / total) * 100)
//     return percent
//   }
  
//     render() {
//       const { good, neutral, bad } = this.state;

//       const totalLot = this.totalResult();
//       const percentLot= this.percentTotal(totalLot)
//       return (
//         <Container title="Please leave feedback">
//           <Clickbate
//             options={this.state}
//             clickFedBack={this.clickFedBack}
//           />
//           <Counter
//             title=""
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalLot}
//             percent={percentLot}
//           />
//         </Container>)
//     }
// }

// export default CounterList;













