import styles from './../../style/sidebar.module.css';
import { Link } from 'react-router-dom';
const Menus = () => {
    return(
        <div className={styles['menu-container']} >
            <Link className={styles['menu-items']} to='/'>
                <div className={styles['menu-icon-text-container']}>
                <i class="fa-solid fa-gauge-high"></i>
                <div className={styles['menu-item']}>Dashboard</div>
                </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
            <Link className={styles['menu-items']} to='/profile'>
            <div className={styles['menu-icon-text-container']}>
                <i class="fa-solid fa-box"></i>
                <div className={styles['menu-item']}>Products</div>
            </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
            <Link className={styles['menu-items']} to='/customers'>
            <div className={styles['menu-icon-text-container']}>
                <i class="fa-solid fa-id-badge"></i>
                <div className={styles['menu-item']}>Customers</div>
            </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
            <Link className={styles['menu-items']} to='/incomes'>
            <div className={styles['menu-icon-text-container']}>
                <i class="fa-solid fa-wallet"></i>
                <div className={styles['menu-item']}>Incomes</div>
            </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
            <Link className={styles['menu-items']} to='/promote'>
            <div className={styles['menu-icon-text-container']}>
                <i class="fa-solid fa-percent"></i>
                <div className={styles['menu-item']}>Promote</div>
            </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
            <Link className={styles['menu-items']} to='/help'>
            <div className={styles['menu-icon-text-container']}>
                <i class="fas fa-question-circle"></i>
                <div className={styles['menu-item']}>Help</div>
            </div>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </Link>                                 
        </div>
    )
}
export default Menus;