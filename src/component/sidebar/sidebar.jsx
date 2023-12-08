import styles from './../../style/sidebar.module.css';
import Header from './header';
import Menus from './menus';
import Profile from './profile';
const Sidebar = () => {
    return (
        <div className={styles['sidebar-container']}>
            <Header />
            <Menus />
            <Profile />
        </div>
    )
}
export default Sidebar;