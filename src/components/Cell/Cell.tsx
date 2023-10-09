import { FC } from "react";

interface IProps {
    row: number;
    col: number;
}

const Cell: FC<IProps> = ({ row, col }) => {
    return (
        <div className={"cell"}></div>
    )
}

export default Cell;