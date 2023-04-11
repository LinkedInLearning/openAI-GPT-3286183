import { Configuration, OpenAIApi } from "openai";

/*
    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)
    2 - Définir un prompt 
    3 - Faire le choix du modèle 
    4 - Définir les paramètres de génération de contenu
    5 - Définir la requête API
  */

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res
      .status(500)
      .json({
        error:
          "OpenAI API key missing, please follow instructions: https://platform.openai.com/account/api-keys",
      });
    return;
  }

  if (!req.body.input) { 
    res.status(400).json({ error: "Missing input" });
    return;
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Q: ${req.body.input} \nA:`,
      temperature: 0,
      max_tokens: 200,
    });
    console.log(response.data.choices[0].text)
    res.status(200).json({ result: response.data.choices[0].text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
