import styles from "./Button.module.scss";

interface Props {
  children: string;
  cep: string;
  gerarCep: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({ children, cep, gerarCep }: Props) {
  return (
    <button onClick={(event) => gerarCep(event)} className={styles.button1}>
      {children}
    </button>
  );
}
