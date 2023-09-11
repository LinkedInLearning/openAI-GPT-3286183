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
  const [chats, setChats] = useState([
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Who won the world series in 2020?" },
    {
      role: "assistant",
      content: "The Los Angeles Dodgers won the World Series in 2020.",
    },
  ]);

  async function handleOnSubmit(event) {
    event.preventDefault();
    ref.current.value = null;
    setChats([...chats, { role: "user", content: input }]);
    try {
      // generate
      generate([...chats, { role: "user", content: input }]).then((data) => {
        setChats([...chats, { role: "user", content: input }, data.result]);
        setInput("");
        ref.current.value = null;
      });
    } catch (error) {
      console.error(error);
    }
  }

  const messages = useMemo(() => {
    return chats
      .filter((chat) => chat)
      .map((chat) => {
        const key = chat["role"] === "assistant" ? "Bot" : "You";
        return {
          [key]: chat["content"],
        };
      })
      .filter((chat, i) => i !== 0 && chat);
  }, [chats]);

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
            {messages.map((message, index) => {
              return Object.entries(message).map(([key, value]) => {
                if (key === "You") {
                  return (
                    <li className="mb-1" key={index}>{`${key}: ${value}`}</li>
                  );
                }
                return (
                  <li
                    className="mb-1"
                    style={{ fontStyle: "italic" }}
                    key={index}
                  >{`${key}: ${value}`}</li>
                );
              });
            })}
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
              onChange={(e) => setInput(e.target.value)}
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
