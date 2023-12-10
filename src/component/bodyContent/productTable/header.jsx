import { useState } from 'react';
import styles from './../../../style/bodycontent/productTable.module.css';
const Header = () => {
    const [activeBox, setActiveBox] = useState(false);
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-title']}>
                Product Sell
            </div>
            <div className={styles['search-days-container']}>
                <div className={styles['search-bar']}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type='text' placeholder='search'/>
                </div>
                <div className={styles['days-container']}>
                    <div>
                    last 30 days
                    </div>
                <i class="fa-solid fa-angle-down" style={activeBox ? {marginTop: 0, transform: 'rotate(180deg)'} : {}} onClick={() => setActiveBox(!activeBox)}></i>
                    <div className={styles['days-items']} style={activeBox ? {opacity: 1} : {}}>
                        <div>Quartely</div>
                        <div>Half yearly</div>
                        <div>Yearly</div>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default Header;