import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.css";

function generate(input) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      resolve({ result: data.result });
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
    } catch (e) {
      console.error(e);
    }
  });
}

export default function Home() {
  const ref = useRef();
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);

  async function handleOnSubmit(event) {
    event.preventDefault();
    ref.current.value = null;
    try {
      // generate
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Head>
        <title>Chat Bot</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h1 className="text-primary">Chat Bot</h1>
        <div
          style={{
            width: "80%",
            height: "70vh",
            background: "#eee",
            overflow: "scroll",
          }}
        >
          <ul className="messages p-4" style={{ listStyleType: "none" }}>
            {/* messages ici */}
          </ul>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="d-flex justify-content-between mt-4">
            <input
              ref={ref}
              className="form-control"
              style={{ height: "fit-content", marginRight: "0.5rem" }}
              height="fit-content"
              type="text"
              onChange={(e) => {}}
            />
            <button type="submit" className="btn btn-primary mb-3">
              Send
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
