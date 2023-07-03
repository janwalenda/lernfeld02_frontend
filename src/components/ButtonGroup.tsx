import styles from '../styles/ButtonGroup.module.scss';

export default function ButtonGroup({ children }: { children: React.ReactNode }){
    return (
        <div className={styles.buttonGroup}>
            {children}
        </div>
    );
}