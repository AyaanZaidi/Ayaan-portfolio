import React, { useState } from 'react';
import './index.css'; // Add your CSS styles here
import { BeatLoader, HashLoader } from 'react-spinners';
import ayaanPic from "./images/ayaan.jpg"
// JSON object array with predefined questions and answers
const botResponses = {
  responses: [
    {
      question: "hello",
      answer: "Hello! How can I help you today?"
    },
    {
      question: "how are you",
      answer: "I'm just a bot, but I'm doing great! How about you?"
    },
    {
      question: "bye",
      answer: "Goodbye! Have a wonderful day!"
    },
    {
      question: "what is your name",
      answer: "I'm your friendly chatbot!"
    }
  ]
};

function App() {
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I assist you today?", sender: 'bot' }
  ]); // List of messages
  const [userInput, setUserInput] = useState(''); // User's input
  const [loading, setloading] = useState(false);

  // Handle user message submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, sender: 'user' };
    setMessages([...messages, userMessage,]);
    console.log(messages)
    
    setTimeout(() => {
      // Fetch bot response based on user input
      const botResponse = getBotResponse(userInput);
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setloading(false)
    }, [1000]);

    setUserInput(''); // Clear the input field
  };

  // Fetch a bot response based on the user's input
  const getBotResponse = (userMessage) => {
    const userInputLower = userMessage.toLowerCase();

    // Find the response that matches the user's input
    const foundResponse = botResponses.responses.find((response) =>
      userInputLower.includes(response.question)
    );

    // If a match is found, use the corresponding answer; otherwise, use a default response
    const botReply = foundResponse
      ? foundResponse.answer
      : "Sorry, I don't understand that. Can you please rephrase?";

    return { text: botReply, sender: 'bot' }; // Return the bot's response
  };

  return (
    <div className="chatbot">
      <div className="chat-header">
        <img className='ayaanPic' src={ayaanPic} alt="" srcset="" />
        <h2>Ayaan Chatbot</h2>
      </div>
      <div className="chat-body">
        {/* {loader} */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="loader"><BeatLoader size={8} color='#970707' /></div>}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="chat-footer">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit"><i class="ri-send-plane-fill"></i></button>
        </div>
      </form>
    </div>
  );
}

export default App;
