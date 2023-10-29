import Numbers from "../components/Numbers.tsx";
import styles from '../pages/Calculate/calculate.module.css'
import {entrailsArr} from "../utils/utlis.ts";

const EnteringNumbers = () => {
    return (
        <div className={styles.enterNums}>
            {
                entrailsArr.map(value => <Numbers key={value.id} num={value.entrails} />).reverse()
            }
        </div>
    );
};

export default EnteringNumbers;