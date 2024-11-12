import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // Fetch the API key using the import.meta.env syntax (for Vite or similar bundlers)
  const apiKey = import.meta.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    // Start a chat session with the specified configuration and an empty history
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    // Send a message with the provided prompt and log the response text
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
  }
  
  export default run;
  