
import styles from "../style/Card.module.css";

const Card = ({ title, text }) => {
    return (
        <div class={styles.card_container}>
            <p className={styles.text}>{title}</p>
            <div class={styles.card_description}>
                <p class={styles.text}>{text}</p>
            </div>
        </div>
    )
}

export default Card;