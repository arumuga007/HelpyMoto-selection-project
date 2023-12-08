import styles from './../../style/sidebar.module.css';
import profileImage from './../../profileImage.webp';
const Profile = () => {
    return (
        <div className={styles['profile-container']}>
            <div className={styles['image-container']}>
                <img src={profileImage}></img>
            </div>
            <div className={styles['name-role-container']}>
                <div className={styles.name}>Evana</div>
                <div className={styles.role}>project manager</div>
            </div>
            <div className={styles['profile-icon']}>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
        </div>
    )
}
export default Profile;