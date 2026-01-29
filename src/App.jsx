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
          <div className="mt-5 rounded-3xl bg-gray-200 flex justify-between ">
            <input
              className="ms-5 rounded-3xl bg-gray-200 flex-1 focus:outline-none placeholder:text-gray-600"
              placeholder="Enter Your Task"
              type="text"
            />
            <button className="bg-orange-400 rounded-3xl px-10 py-3 text-white">
              Add
            </button>
          </div>

          {/* unorder List part */}

          <ul className="p-5">
            <li
              className="my-3 before:content-['']
                  before:inline-block
                  before:w-5 before:h-5
                  before:mr-3
                  before:bg-[url('src/images/unchecked.png')]
                  before:bg-contain
                  before:bg-no-repeat"
            >
              Task 1
            </li>
            <li
              className="my-3 before:content-['']
                    before:inline-block
                    before:w-5 before:h-5
                    before:mr-3
                    before:bg-[url('src/images/unchecked.png')]
                    before:bg-contain
                    before:bg-no-repeat"
            >
              Task 2
            </li>
            <li
              className="my-3 before:content-['']
                      before:inline-block
                      before:w-5 before:h-5
                      before:mr-3
                      before:bg-[url('src/images/unchecked.png')]
                      before:bg-contain
                      before:bg-no-repeat"
            >
              Task 3
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
