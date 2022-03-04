import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../routes/routesNames';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './style.module.scss';

const DictionaryPageLayout = ({ info, isLoading, isError }) => {
  return (
    <div className={styles.dictionary}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {isError ? (
            <p className={styles.dictionary__error}>
              Sorry pal, we couldn't find definitions for the word you were
              looking for.You can try the search again at later time or head to
              the web instead.
            </p>
          ) : (
            <>
              <p>
                Word: <span>{info[0].word}</span>
              </p>
              {info[0].phonetics[0] ? (
                <p>
                  Transcription:<span> {info[0].phonetics[0].text}</span>
                </p>
              ) : null}

              {info[0].phonetics[1] ? (
                <p>
                  Transcription:<span> {info[0].phonetics[1].text}</span>
                </p>
              ) : null}
              {info[0].meanings[0].partOfSpeech ? (
                <p>
                  Part Of Speech:
                  <span> {info[0].meanings[0].partOfSpeech}</span>
                </p>
              ) : null}
              {info[0].meanings[0].definitions[0].definition ? (
                <p>
                  Meaning:{' '}
                  <span>{info[0].meanings[0].definitions[0].definition}</span>
                </p>
              ) : null}
              {info[0].meanings[0].definitions[0].example ? (
                <p>
                  Example:
                  <span> {info[0].meanings[0].definitions[0].example}</span>
                </p>
              ) : null}
            </>
          )}

          <Link to={ROUTES.HOME_PAGE} className={styles.dictionary__link}>
            <Button>Back To Home Page</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DictionaryPageLayout;
