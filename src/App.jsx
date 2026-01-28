import React from "react";

export default function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center">
        <div className="h-auto w-[30vw] bg-white rounded-lg p-5">
          {/* todo list & image */}
          <h1 className="font-bold text-xl flex items-center">
            To Do List
            <img
              className="h-8 w-8 mx-5"
              src="src/images/icon.png"
              alt="icon image"
            />
          </h1>
          {/* input part */}
          <div className="mt-5 rounded-2xl bg-gray-200 flex justify-between p-5">
            <input className=" rounded-2xl bg-gray-200 w-[80vw]" type="text" />
            <button className="bg-orange-400">Add</button>
          </div>
        </div>
      </div>
    </>
  );
}
