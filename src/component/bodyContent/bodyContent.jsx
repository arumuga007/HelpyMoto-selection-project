import styles from './../../style/bodycontent/bodycontent.module.css';
import UpperBody from './upperBody/upperBody';
const BodyContent = () => {
    return (
        <div className={styles['body-container']}>
            <UpperBody />
        </div>
    )
}
export default BodyContent;