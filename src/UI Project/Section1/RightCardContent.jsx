export default function RightCardContent(props) {
    console.log(props)
    console.log("my last")
    console.log(props.para)
  return (
    <div className="absolute top-0 left-0 h-full w-72 p-6 flex flex-col justify-between overflow-x-auto">
      <h1 className="text-xl font-bold text-black bg-white h-6 w-5 flex items-center justify-center p-5 rounded-full">
        {props.id}
      </h1>
      <div className="text-white leading-normal">
        <p className="text-lg">{props.para}
        </p>
        <div className="flex justify-around">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-2 font-medium">
            {props.btn}
          </button>
          <button className="bg-blue-500 text-white px-3 py-2 rounded-full mt-2 font-medium">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
