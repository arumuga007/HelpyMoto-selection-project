import styles from './../../../style/bodycontent/middleBody.module.css';
const Customers = () => {
    return (
        <div className={styles['customers-container']}>
            <div className={styles['customer-header -container']}>
                <div className={styles['header-title']}>Customers</div>
                <div className={styles['header-subtitle']}>customer that buy products</div>
            </div>
            <div className={styles['circle-container']}>
                <span>65%</span>
                <br/>
                Total New 
                <br />
                Customers
            </div>
        </div>
    )
}
export default Customers;