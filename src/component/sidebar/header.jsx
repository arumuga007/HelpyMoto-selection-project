import styles from './../../style/sidebar.module.css';
const Header = () => {
    return(
        <div className={styles['header-container']}>
            <div className={styles['header-icon']}>
            <i class="fa fa-cog" aria-hidden="true"></i>
            </div>
            <div className={styles.header}>Dashboard</div>
        </div>
    )
}
export default Header;