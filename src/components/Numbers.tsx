import styles from '../pages/Calculate/calculate.module.css'
import {FC} from "react";
import {useActions} from "../hooks/useActions.ts";
interface NumberProps {
    num: number | string,
}

const Numbers: FC<NumberProps> = ({num}) => {
    const {computations} = useActions()
    return (
        <button onClick={() => computations(num)} className={num === 0 ? styles.nullObject : styles.numbersButton}>
            {num}
        </button>
    );
};

export default Numbers;