import styles from './Button.module.scss';

type Props = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
