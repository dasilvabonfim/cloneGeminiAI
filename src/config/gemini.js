import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyC64q8UgUYLyTfrWT-o67bJ_jpJoRukEIA");



const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});



async function run(prompt) {

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export default run;
