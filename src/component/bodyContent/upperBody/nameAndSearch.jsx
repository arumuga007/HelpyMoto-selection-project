import styles from './../../../style/bodycontent/upperBody.module.css';
const NameAndSearch = () => {
    return (
        <div className={styles['name-search-container']}>
            <div className={styles['name']}>
                Hello shahrukh <span>👋</span>,
            </div>
            <div className={styles['search-bar']}>
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type='text' placeholder='search'/>
            </div>
        </div>
    )
}
export default NameAndSearch;