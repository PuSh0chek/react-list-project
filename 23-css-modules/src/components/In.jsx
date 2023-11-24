import './Fo.css'
import styles from './Fo.module.css'

function In() {
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <button className="my-button">Click</button>
        </div>
    )
}

export default In
