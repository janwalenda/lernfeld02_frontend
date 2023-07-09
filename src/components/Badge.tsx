import styles from '../styles/Badge.module.scss';

export default function Badge({ value }: { value: string | number; }) {
    return (
        <span className={styles.badge}>
            {value}
        </span>
    );
}
