import Head from "next/head";
import { useMemo, useState, useRef } from "react";
import styles from "./index.module.css";

function generateRecipe(input) {
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
      resolve({ recipe: data.result, input });
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

async function generateImage({ recipe }) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: recipe }),
      });
      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      resolve({ recipe, image: data.image_url });
    } catch (e) {
      console.error(e);
    }
  });
}

const Loading = ({ isVisible }) => isVisible && <h2>Loading ...</h2>;

const Recipe = ({ recipe, image, isVisible }) => {
  const textFormatted = useMemo(() => {
    const recipearray = recipe?.split("\n").slice(4, -1).join("\n");
    return {
      title: recipe?.split("\n")[2],
      recipe: recipearray,
    };
  }, [recipe]);
  return (
    isVisible && (
      <>
        <h2>{textFormatted.title}</h2>
        <div style={{ display: "flex", width: "80%", padding: "2rem" }}>
          {image && <img src={image} width="350" height="350" />}
          {recipe && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 2.4rem",
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: "1rem", fontStyle: "italic" }}>
                  <pre style={{ margin: 0 }}>{textFormatted.recipe}</pre>
                </p>
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
};

export default function Home() {
  const ref = useRef();
  const [isPending, loading] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    loading(true);
    ref.current.value = null;
    setInput("");
    try {
      generateRecipe(input)
        .then(generateImage)
        .then(({ recipe, image }) => {
          loading(false);
          setResult({ recipe: recipe.replace("extract", ""), image });
        });
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }
  return (
    <div>
      <Head>
        <title>Create a recipe</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Create a recipe</h3>
        <form onSubmit={onSubmit}>
          <input
            ref={ref}
            style={{ marginBottom: "1.3rem" }}
            type="text"
            placeholder="ingredients ..."
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="create" />
        </form>
        <Loading isVisible={isPending} />
        <Recipe {...result} isVisible={!isPending} />
      </main>
    </div>
  );
}
