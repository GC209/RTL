import { CounterTwoProps } from "./counter-two.types";

const CounterTwo = (props: CounterTwoProps) => {
  return(
    <div>
      <h1>Counter two</h1>
      <p>props.count</p>
      {props.handleIncrement && 
        <button onClick={props.handleIncrement}>Increment</button>
      }
      {props.handleDecrement &&
        <button onClick={props.handleDecrement}>Decrement</button>
      }
    </div>
  )
}
export default CounterTwo;