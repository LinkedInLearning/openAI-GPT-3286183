import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ width: "50%", margin: "0 auto"}}>
      <h1 className="text-center mb-5">Counter: {count}</h1>
      <div className="d-flex justify-content-around">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>  
    </div>
  );
};
export default function Home() {
  return (
    <div>
      <Head>
        <title> 🔍 - Generate Code</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
      <Counter />
      </main>
    </div>
  );
}
