import styles from './calculate.module.css'
import EnteringNumbers from "../../built-in/EnteringNumbers.tsx";
import EnteringCalculations from "../../built-in/EnteringCalculations.tsx";

const Calculate = () => {
    return (
        <div className={styles.mainBlock}>
            <EnteringCalculations />
            <EnteringNumbers />
        </div>
    );
};

export default Calculate;