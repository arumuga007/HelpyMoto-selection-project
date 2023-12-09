import { useState } from 'react';
import styles from './../../../style/bodycontent/middleBody.module.css'
const Overview = () => {
    const [period, setPeriod] = useState('quartely');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
        <div className={styles['overview-container']}>
            <div className={styles['header-container']}>
                <div className={styles['title-container']}>
                    <div className={styles['title']}>
                        Overviews
                    </div>
                    <div className={styles['sub-title']}>
                        Monthly Earning
                    </div>
                </div>
                <div className={styles['select-period-container']}>
                    <div className={styles['period']}>
                        {period}
                    </div>
                    <i class="fa-solid fa-arrow-down"></i>
                    <div className={styles['period-items']}>
                        <div>Quartely</div>
                        <div>Yearly</div>
                    </div>
                </div>
            </div>
            <div className={styles['graph-container']}>
                {
                    months.map((month, key) => {
                        return (
                            <div className={styles['graph-items']} key={key}>
                                <div className={styles['graph-bar']}>
                                </div>
                                <div className={styles['graph-text']}>
                                    {month}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Overview;