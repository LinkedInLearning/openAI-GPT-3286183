import Head from "next/head";
import { useState, useRef } from "react";
import styles from "./index.module.css";

const Loading = ({ isVisible }) => isVisible && <h2 className="mt-4 text-center">Loading ...</h2>;

const Result = ({ result, isVisible }) => {
  return (
    isVisible && (
      <p className="mt-5 text-center" style={{ width: "60%" }}>
        {result}
      </p>
    )
  );
};

export default function Home() {
  const ref = useRef(null);
  const [isPending, loading] = useState(false);
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("");

  async function generate() {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
    return { result: {} };
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    loading(true);
    try {
      // generate
      generate()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Head>
        <title> 🔍 - OpenAI-Facts Search</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h3>
          <span style={{ color: "#1abc9c" }}>Facts</span>{" "}
          <span style={{ color: "#e74c3c" }}>Search</span>
        </h3>
        <form onSubmit={handleOnSubmit}>
          <input
            ref={ref}
            type="text"
            name="title"
            placeholder="search ..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <Loading isVisible={isPending} input={input} />
        <Result isVisible={!isPending} result={result} />
      </main>
    </div>
  );
}
