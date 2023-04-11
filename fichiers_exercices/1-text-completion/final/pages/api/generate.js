import { Configuration, OpenAIApi } from "openai";

  /*
    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)
    2 - Définir un prompt 
    3 - Faire le choix du modèle 
    4 - Définir les paramètres de génération de contenu
    5 - Définir la requête API
  */

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export default async function(req, res) { 
  if (!configuration.apiKey) {
    res.status(500).json({ error: "OpenAI API key missing, please follow instructions: https://platform.openai.com/account/api-keys" })
    return
  }

  const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Q: Where is the Valley of Kings?\nA:",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  })
  console.log(response.data.choices[0].text)
}
