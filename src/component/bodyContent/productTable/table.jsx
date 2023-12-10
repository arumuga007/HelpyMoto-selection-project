import styles from './../../../style/bodycontent/productTable.module.css';
import abstractImage from './images/abstractImage.jpg';
import abstractImage2 from './images/abstractImage2.jpg'
const Table = () => {
    return (
        <div className={styles.table}>
            <div className={styles['product-name-container']}>
                <div className={styles['product-name']}>
                    Product Name
                </div>
                <div className={styles['product-item']}>
                    <div className={styles['image-container']}>
                        <img src={abstractImage} />
                    </div>
                    <div className={styles['product-content-container']}>
                        <div className={styles['product-title']}>
                            ABSTRACT 3D
                        </div>
                        <div className={styles['product-description']}>
                            abstract 3d is an illustration
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={styles['others-container']}>
                <div className={styles['stock-container']}>
                    <div className={styles['stock-name']}>
                        stock
                    </div>
                    <div className={styles['stock-item']}>
                        32 in stock
                    </div>
                </div>
                <div className={styles['price-container']}>
                    <div className={styles['price-name']}>
                        price
                    </div>
                    <div className={styles['price-item']}>
                        $14.78
                    </div>
                </div>
                <div className={styles['sales-container']}>
                    <div className={styles['sales-name']}>
                        Total Sales
                    </div>
                    <div className={styles['sales-item']}>
                        20
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table;