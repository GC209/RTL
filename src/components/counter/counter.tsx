import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amountInput, setAmountInput] = useState(0);

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="number"
        name="amount"
        value={amountInput}
        onChange={(e) => setAmountInput(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amountInput)}>Set</button>
    </div>
  )
}

export default Counter;