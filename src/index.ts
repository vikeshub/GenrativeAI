import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in the environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash" });
  const result = await model.generateContent("Hello! how are you?");
  const response = await result.response;
  console.log(response.text());
}
run();
