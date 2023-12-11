import styles from './../../style/navbar.module.css';
const Navbar = (props) => {
    console.log(props.activeMenu)
    return(
        <div className={styles.container}>
            <div className={styles['navbar-icon-container']} onClick={() => props.setActiveMenu(!props.activeMenu)}>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className={styles['search-bar-container']}>
                <div className={styles['search-bar']}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type='text' placeholder='search'/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;