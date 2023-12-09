import styles from './../../../style/bodycontent/middleBody.module.css'
import Customers from './customers'
import Overview from './overview'
const MiddleBody = () => {
    return (
        <div className={styles['container']}>
           <Overview />
           <Customers /> 
        </div>
    )
}
export default MiddleBody;