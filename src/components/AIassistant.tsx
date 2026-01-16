import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import myPfp from '../assets/mypfp.jpg'; // your image path

export default function AIassistant({ darkMode }: { darkMode: boolean }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hi there! 👋🏻 Welcome to my portfolio. You can ask me anything about myself, my projects, or my tech stack."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user's message
    const newMessages = [...messages, { sender: "You", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://my-portfolio-backend-production-8602.up.railway.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });


      const data = await response.json();

      // Add AI reply (first-person)
      setMessages([...newMessages, { sender: "AI", text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { sender: "AI", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  const buttonStyle = {
    boxShadow: darkMode
      ? '6px 6px 0 rgba(255,255,255,1)'
      : '6px 6px 0 rgba(0,0,0,1)',
    border: darkMode ? '2px solid rgba(255,255,255,0.8)' : '2px solid rgba(0,0,0,0.8)',
    background: darkMode
      ? 'rgba(50, 80, 120, 0.8)'
      : 'rgba(173, 216, 230, 0.8)',
    backdropFilter: 'blur(4px) saturate(150%)',
    WebkitBackdropFilter: 'blur(4px) saturate(150%)',
    borderRadius: '15px',
  };

  const chatBoxStyle = {
    boxShadow: darkMode
      ? '6px 6px 0 rgba(255,255,255,1)'
      : '6px 6px 0 rgba(0,0,0,1)',
    background: darkMode
      ? 'rgba(50, 80, 120, 0.4)'
      : 'rgba(173, 216, 230, 0.4)',
    backdropFilter: 'blur(6px) saturate(150%)',
    WebkitBackdropFilter: 'blur(6px) saturate(150%)',
    border: darkMode ? '2px solid rgba(255,255,255,0.35)' : '2px solid rgba(0,0,0,0.35)',
    borderRadius: '15px',
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 w-14 h-14 flex items-center justify-center text-xl cursor-pointer transition-transform hover:-translate-y-1"
        style={buttonStyle}
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {/* Chat Box */}
      {open && (
        <div
          className="fixed bottom-20 right-5 w-80 max-w-xs h-96 flex flex-col p-3"
          style={chatBoxStyle}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h3 className={`font-heading font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              Ask Me Anything
            </h3>
            <button onClick={() => setOpen(false)}>
              <FaTimes className={darkMode ? 'text-white' : 'text-black'} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto mb-2 p-2 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2 items-start ${msg.sender === "You" ? "justify-end" : ""}`}>
                {msg.sender !== "You" && (
                  <img
                    src={myPfp}
                    alt="You"
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                  />
                )}
                <div className={`${msg.sender === "You" ? "text-right" : ""}`}>
                  <p className={`font-body font-bold text-xs ${darkMode ? 'text-white' : 'text-black'}`}>
                    {msg.sender === "You" ? "You" : ""}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Typing...
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
              className={`flex-1 p-2 rounded border-2 focus:outline-none ${
                darkMode
                  ? 'bg-black/20 border-white/50 text-white placeholder-gray-300'
                  : 'bg-white/40 border-black/50 text-black placeholder-gray-700'
              }`}
            />
            <button
              onClick={handleSend}
              className={`px-3 py-1 rounded border-2 font-bold transition-transform hover:-translate-y-1 ${
                darkMode
                  ? 'bg-black/50 border-white text-white hover:bg-white/50 hover:text-black'
                  : 'bg-white/50 border-black text-black hover:bg-black/50 hover:text-white'
              }`}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
