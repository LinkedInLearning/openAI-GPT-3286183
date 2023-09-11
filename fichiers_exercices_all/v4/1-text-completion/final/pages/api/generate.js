import OpenAI from "openai";

/*
    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)
    2 - Définir un prompt 
    3 - Faire le choix du modèle 
    4 - Définir les paramètres de génération de contenu
    5 - Définir la requête API
  */

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export default async function (req, res) {
  if (!openai.apiKey) {
    res.status(500).json({
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
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a knowledgeable assistant" },
        { role: "user", content: "Q: " + req.body.input },
      ],
      model: "gpt-3.5-turbo",
    });
    res.status(200).json({ result: completion.choices[0].message.content });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
