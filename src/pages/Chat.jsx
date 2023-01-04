import React from "react";
import ChatContent from "../component/ChatContent";

const Chat = () => {
  return (
    <>
      <div className="p-2 bg-[#C4D7E0] border-[2px] border-zinc-400 shadow shadow-zinc-400 w-[98vw] h-[91vh] rounded-r-3xl">
        <ChatContent />
      </div>
    </>
  );
};

export default Chat;
