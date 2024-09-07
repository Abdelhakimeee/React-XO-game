import React, { Dispatch, SetStateAction } from "react";

type CellProps = {
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    id : number;
    cell: string;
    winnigMessage: string;

}

const Cell = ({go, setGo, id, cells, setCells, cell, winnigMessage}: CellProps) =>{

    const handleCellChange = (cellToChange: string) =>{
        let copyCells = [...cells]
        copyCells[id] = cellToChange
        setCells(copyCells)
    }
    const handleClick = () =>{
        if (winnigMessage) {
            return;
        }
        const notTaken = !cells[id]

        if (notTaken) {
            if(go === "circle") {
                handleCellChange('circle')
                setGo('cross')
            } else if (go === 'cross') {
                handleCellChange('cross')
                setGo('circle')
            }
        }
    }
    return(
    <div className="square" onClick={handleClick}>
        <div className={cell}>{cell ? (cell === 'circle' ? "0": "X"):""}</div>

    </div>
    );
}
export default Cell;