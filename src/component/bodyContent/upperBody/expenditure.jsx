import styles from './../../../style/bodycontent/upperBody.module.css';
import earnings from './images/earnings.png';
import orders from './images/orders.png';
import wallet from './images/wallet.png';
import shoppingBag from './images/shoppingBag.png';
const Expenditure = () => {
    return (
        <div className={styles['expenditure-container']}>
            <div className={styles['expenditure-item']}>
                <div className={styles['image-container']}>
                    <img src={earnings} alt='earning'></img>
                </div>
                <div className={styles['details']}>
                    <div className={styles['details-header']}>
                        Earning
                    </div>
                    <div className={styles['details-amount']}>
                        $198k
                    </div>
                    <div className={styles['details-revenue-month']}>
                        <span><i class="fa-solid fa-arrow-up"></i>37.8% </span>this month
                    </div>
                </div>
            </div>
            <div className={styles['expenditure-item']}>
                <div className={styles['image-container']} style={{backgroundColor: '#E7DBFF'}}>
                    <img src={orders} alt='earning'></img>
                </div>
                <div className={styles['details']}>
                    <div className={styles['details-header']}>
                        orders
                    </div>
                    <div className={styles['details-amount']}>
                        $2.4k
                    </div>
                    <div className={styles['details-revenue-month']}>
                        <span style={{color: 'red'}}><i class="fa-solid fa-arrow-down"></i>2% </span>this month
                    </div>
                </div>
            </div>
            <div className={styles['expenditure-item']}>
                <div className={styles['image-container']} style={{backgroundColor: '#CCF2FF'}}>
                    <img src={wallet} alt='earning'></img>
                </div>
                <div className={styles['details']}>
                    <div className={styles['details-header']}>
                        wallet
                    </div>
                    <div className={styles['details-amount']}>
                        $2.4k
                    </div>
                    <div className={styles['details-revenue-month']}>
                        <span style={{color: 'red'}}><i class="fa-solid fa-arrow-down"></i>2% </span>this month
                    </div>
                </div>
            </div>
            <div className={styles['expenditure-item']}>
                <div className={styles['image-container']} style={{backgroundColor: '#FEB6DC'}}>
                    <img src={shoppingBag} alt='earning'></img>
                </div>
                <div className={styles['details']}>
                    <div className={styles['details-header']}>
                        Total sales
                    </div>
                    <div className={styles['details-amount']}>
                        $89k
                    </div>
                    <div className={styles['details-revenue-month']}>
                        <span><i class="fa-solid fa-arrow-up"></i>11% </span>this month
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Expenditure;