import Head from "next/head";
import { useState, useEffect, useRef, useMemo } from "react";
import styles from "./index.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "50%", margin: "2rem auto"}}>
      <p className="text-center h1 mb-4">Count: {count}</p>
      <div className="d-flex justify-content-around">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
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
