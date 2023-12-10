import { useRef, useState } from 'react';
import styles from './../../../style/bodycontent/middleBody.module.css'
const Overview = () => {
    const [period, setPeriod] = useState('quartely');
    const [activeBox, setActiveBox] = useState(false);
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
                    <i class="fa-solid fa-angle-down" style={activeBox ? {marginTop: 0, transform: 'rotate(180deg)'} : {}} onClick={() => setActiveBox(!activeBox)}></i>
                    <div className={styles['period-items']} style={activeBox ? {opacity: 1} : {}}>
                        <div>Quartely</div>
                        <div>Half yearly</div>
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