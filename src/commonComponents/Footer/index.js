import styles from './style.module.scss';

import linkedin from '../../static/img/linkedin.png';
import git from '../../static/img/git.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Contacts: </h2>
      <a
        className={styles.home__text}
        href='https://www.linkedin.com/in/mikhail-panteleev-598b54219/'
        target='_blank'
      >
        {<img src={linkedin} alt={'linkedin'} className={styles.image} />}
        Linkedin
      </a>
      <a
        className={styles.home__text}
        href='https://github.com/MikhailPanteleev'
        target='_blank'
      >
        {<img src={git} alt={'git'} className={styles.image} />}
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
