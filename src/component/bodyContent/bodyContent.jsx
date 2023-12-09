import styles from './../../style/bodycontent/bodycontent.module.css';
import MiddleBody from './middleBody/middleBody';
import UpperBody from './upperBody/upperBody';
const BodyContent = () => {
    return (
        <div className={styles['body-container']}>
            <UpperBody />
            <MiddleBody />
        </div>
    )
}
export default BodyContent;