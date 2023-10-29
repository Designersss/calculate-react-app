import styles from '../pages/Calculate/calculate.module.css'
import {useGetCount} from "../hooks/useGetCount.ts";

const EnteringCalculations = () => {
    const {count, denominator, countTw, prevMeaning} = useGetCount()
    return (
        <div className={styles.enterCalc}>
            {prevMeaning}
            <div className={styles.enterCount}>{count}  {denominator}  {countTw}</div>
        </div>
    );
};

export default EnteringCalculations;