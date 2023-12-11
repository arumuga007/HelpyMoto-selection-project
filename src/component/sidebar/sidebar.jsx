import styles from './../../style/sidebar.module.css';
import Header from './header';
import Menus from './menus';
import Profile from './profile';
const Sidebar = (props) => {
    console.log(props.activeMenu);
    return (
        <div className={`${styles['sidebar-container']} ${props.activeMenu == true? styles['active-menu'] : ''}`}>
            <Header />
            <Menus />
            <Profile />
        </div>
    )
}
export default Sidebar;