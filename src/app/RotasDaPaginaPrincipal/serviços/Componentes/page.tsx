import styles from './cards.module.css'

interface CardsProps {
    title: string;
    imageSrc: string;
    altText: string;
    description: string | JSX.Element;  // Permite string ou JSX
}

export default function Cards(props: CardsProps) {
    const { title, imageSrc, altText, description } = props;

    return (
        <div className={styles.cards}>
            <h3>{title}</h3>
            <img src={imageSrc} alt={altText} />
            <p>{description}</p>
        </div>
    );
}
