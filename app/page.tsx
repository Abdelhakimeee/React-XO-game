 "use client";

 import { useEffect, useState } from "react";
import Cell from "./Components/cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState('')

  useEffect(()=>{
    winningCombos.forEach((combo)=>{
      const circleWins = combo.every((cell) => cells[cell] === 'circle')
      const crossWins = combo.every((cell) => cells[cell] === 'cross')

      if (circleWins) {
        setWinningMessage("Circle Wins!") 
      } else if (crossWins) {
        setWinningMessage("Cross Wins!")
      }
    })
  },[cells])

  useEffect(()=>{
    if (cells.every((cell)=> cell !== "") && !winningMessage) {
      setWinningMessage('Draw!');
    }

  },[cells, winningMessage])
  return (
    
      <div className="container" >
        <div className="gameboard">
          {cells.map((cell, index)=>(
            <Cell 
            id={index}
            key={index}
            go={go} 
            setGo={setGo}  
            cells={cells} 
            setCells={setCells}
            cell={cell}
            winnigMessage={winningMessage}
            />
          ))}
        </div>

        <div className="message">
        <div>{winningMessage}</div>
        {!winningMessage && <div >{`Its now ${go} turn!`}</div>}
        </div>
        
      </div>
  );
}
