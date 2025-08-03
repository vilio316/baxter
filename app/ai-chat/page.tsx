"use client";

import { useState } from "react";
import { chatItem } from "./load_processor";
import { FiSend, FiUser } from "react-icons/fi";

export default function AIRoute() {
  const [query, updateQVal] = useState("");
  
  function appender() {
    const chat_window = document.querySelector("#chat_body");
    const div = document.createElement("div");
    div.className =
      "grid text-xl justify-self-end p-3 rounded-lg rounded-bl-none my-2 bg-gray-400 text-right justify-self-right h-auto";
    chat_window?.appendChild(div);
    div.textContent = query;
  }

  function appendAIResponse(txt: string) {
    const chat_window = document.querySelector("#chat_body");
    const div = document.createElement("div");
    div.className =
      "grid text-xl my-2 bg-[#53D22c] text-gray-800 p-3 rounded-lg rounded-bl-none text-left justify-self-left h-auto sm:w-[60%] text-justify";
    chat_window?.appendChild(div);
    div.textContent = txt;
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    appender();
    appendAIResponse('Loading...')
    const value = await chatItem(query);
    if (value) {
      appendAIResponse(value);
    }
    updateQVal('')
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 p-4 sm:p-2 my-2 gap-4 w-full">
      <div className="col-span-1 sm:col-span-5 h-[90vh] bg-white rounded-lg shadow-lg w-full">
        <div className="bg-[#53D22c] text-white p-4 flex items-center rounded-t-lg">
          <FiUser className="w-6 h-6 mr-2" />
          <div>
            <h1 className="font-bold text-lg sm:text-xl">Baxter Chatbot</h1>
            <p className="text-xs text-blue-100 sm:text-sm">Online</p>
          </div>
        </div>

        <div
          id="chat_body"
          className="overflow-y-auto p-4 space-y-4 h-[75vh] sm:h-[70vh]"
        ></div>

        <form
          onSubmit={handleSubmit}
          className="border-t border-gray-200 p-4 flex items-center mt-10 w-full"
        >
          <input
            type="text"
            name="chat_text"
            placeholder="Type your message here..."
            maxLength={100}
            minLength={2}
            onChange={(e) => updateQVal(e.target.value)}
            value={query}
            autoFocus
            className="flex-1 text-gray-800 border border-gray-300 rounded-lg py-3 px-5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded-lg ml-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <FiSend size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
