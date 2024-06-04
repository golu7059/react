import { useState } from "react"

function App() {
  const[color,setColor] = useState("pink");

  return (
    <div className="w-full h-screen duration-200 place-self-center	text-center"
    style={{backgroundColor : color}}
    > 
    <div className="text-center place-self-center	italic align-middle	">
    <b>Change</b> the background color by <br></br>clicking below buttons
    </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-12">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          onClick={() => setColor("red")}
          >red</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          onClick={() => setColor("green")}
          >green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          onClick={() => setColor("blue")}
          >blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"olive"}}
          onClick={() => setColor("olive")}
          >olive</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"gray"}}
          onClick={() => setColor("gray")}
          >gray</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
          style={{backgroundColor:"yellow"}}
          onClick={() => setColor("yellow")}
          >yellow</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
          style={{backgroundColor:"pink"}}
          onClick={() => setColor("pink")}
          >pink</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-white"
          style={{backgroundColor:"purple"}}
          onClick={() => setColor("purple")}
          >purple</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
          style={{backgroundColor:"lavender"}}
          onClick={() => setColor("lavender")}
          >lavender</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"
          style={{backgroundColor:"white"}}
          onClick={() => setColor("white")}
          >white</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-white"
          style={{backgroundColor:"black"}}
          onClick={() => setColor("black")}
          >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
