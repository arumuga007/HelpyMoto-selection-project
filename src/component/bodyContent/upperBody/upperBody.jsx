import styles from './../../../style/bodycontent/upperBody.module.css';
import Expenditure from './expenditure';
import NameAndSearch from './nameAndSearch';
const UpperBody = () => {
    return (
        <div className={styles['upperbody-container']}>
            <NameAndSearch />
            <Expenditure />
        </div>
    )
}
export default UpperBody;