import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href='https://dictionaryapi.dev/' target='_blank'>
          Free Dictionary API
        </a>
      </h1>
    </header>
  );
};

export default Header;
