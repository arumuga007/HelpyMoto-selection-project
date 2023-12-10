import styles from './../../../style/bodycontent/productTable.module.css';
import Header from './header';
import Table from './table';
const ProductTable = () => {
    return(
        <div className={styles['container']}>
            <Header />
            <Table />
        </div>
    )
}
export default ProductTable;