import React from "react";

export default function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center">
        <div className="h-auto w-[30vw] bg-white rounded-lg">
          <h1 className="font-bold text-xl flex p-5 items-center">
            To Do List{" "}
            <img
              className="h-16 w-16" 
              src="src/images/icon.png"
              alt="icon image"
            />
          </h1>
        </div>
      </div>
    </>
  );
}
