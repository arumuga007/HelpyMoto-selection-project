import styles from './../../style/bodycontent/bodycontent.module.css';
import MiddleBody from './middleBody/middleBody';
import ProductTable from './productTable/productTable';
import UpperBody from './upperBody/upperBody';
const BodyContent = () => {
    return (
        <div className={styles['body-container']}>
            <UpperBody />
            <MiddleBody />
            <ProductTable />
        </div>
    )
}
export default BodyContent;