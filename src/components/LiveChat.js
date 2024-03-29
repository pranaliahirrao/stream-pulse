import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMesssages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: generateRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="w-[540px] h-[800px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMesssages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.text} />
        ))}
      </div>

      <form className="w-full p-2 ml-2 border border-black my-2" onSubmit={(e) => {
        e.preventDefault();
        console.log(liveMessage);
        dispatch(addMessage({
            name: "Pranali Ahirrao",
            text: liveMessage
        }))
        setLiveMessage('');
        }}>
        <input
          className="w-96 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
