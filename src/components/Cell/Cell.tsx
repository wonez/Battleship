import {FC} from "react";
import styles from './Cell.module.css'
import {HIT, TOTAL} from "../../const";

interface IProps {
    value: string;
    handleCellClick: () => void;
}

const Cell: FC<IProps> = ({ value, handleCellClick }) => {

    const classes = [styles.cell, value === 'MISS' ? styles.miss : ( value.includes(HIT) ? styles.hit : ( value.includes(TOTAL) ? styles.total : '' ) )]

    return (
        <div className={classes.join(' ')} onClick={handleCellClick}></div>
    )
}

export default Cell;