import styles from './Card.module.css'

// TODO: Scoring:https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6

export default function Card({ children }) {
    if (!children) return null
    const { title, cover, synopsis, author } = children.book
    return (
        <div className={styles.card}>
            <div>
                <img className={styles.cover} src={cover} alt="cover" />
            </div>
            <div className={`${styles.container} pl-4`}>
                <div className={styles.content}>
                    <div className={styles.score}>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <div className="text-[14px] md:text-[16px] font-semibold">
                        <p>{title}</p>
                    </div>
                    <div className="text-[10px] md:text-[12px]">
                        <p>{synopsis}</p>
                    </div>
                    <div className="text-[12px] md:text-[14px] font-medium">
                        <p>{author.name}</p>
                    </div>
                </div>
                <div className={styles.addList}>
                    <button>Añadir a la lista</button>
                </div>
            </div>
        </div>
    )
}
