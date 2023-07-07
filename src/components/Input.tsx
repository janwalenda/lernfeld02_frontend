import styles from '../styles/Input.module.scss';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, 
    HTMLInputElement
>;

export function Input({ label, inputProps }: {
    label: string;
    inputProps: InputProps
}) {
    return (
        <label>
            <div className={styles.inputWrapper}>
                <span>{label}</span>
                <input {...inputProps} />
            </div>
        </label>
    );
}
