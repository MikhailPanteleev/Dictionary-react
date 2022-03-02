import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../routes/routesNames';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const DictionaryPageLayout = ({ info, isLoading, isError, error }) => {
  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <Link to={ROUTES.HOME_PAGE}>
            <Button>Back To Home Page</Button>
          </Link>
          <div>
            {isError ? (
              <p>{error.response}</p>
            ) : (
              <>
                <p>
                  Word: <span>{info[0].word}</span>
                </p>
                {info[0].phonetics[0]?.text ? (
                  <p>Transcription: {info[0].phonetics[0]?.text}</p>
                ) : null}
                {info[0].phonetics[0]?.audio ? <p>Pronunciation:</p> : null}
                {info[0].phonetics[0]?.audio ? (
                  <div>
                    <audio src={info[0].phonetics[0]?.audio} controls></audio>
                  </div>
                ) : null}
                {info[0].phonetics[1]?.text ? (
                  <p>Transcription: {info[0].phonetics[1]?.text}</p>
                ) : null}
                {/*<audio src={info[0].phonetics[1]?.audio} controls></audio>*/}
                {info[0].meanings[0]?.partOfSpeech ? (
                  <p>Part Of Speech: {info[0].meanings[0]?.partOfSpeech}</p>
                ) : null}
                {info[0].meanings[0]?.definitions[0].definition ? (
                  <p>
                    Meaning: {info[0].meanings[0]?.definitions[0].definition}
                  </p>
                ) : null}
                {info[0].meanings[0]?.definitions[0].example ? (
                  <p>Example: {info[0].meanings[0]?.definitions[0].example}</p>
                ) : null}
                {info[0].meanings[1]?.partOfSpeech ? (
                  <p>Part Of Speech: {info[0].meanings[1]?.partOfSpeech}</p>
                ) : null}
                {info[0].meanings[1]?.definitions[0].definition ? (
                  <p>
                    Definition: {info[0].meanings[1]?.definitions[0].definition}
                  </p>
                ) : null}
                {info[0].meanings[1]?.definitions[0].example ? (
                  <p>Example: {info[0].meanings[1]?.definitions[0].example}</p>
                ) : null}
                {info[0].meanings[1]?.definitions[0].synonyms.join(', ') ? (
                  <p>
                    Synonyms:{' '}
                    {info[0].meanings[1]?.definitions[0].synonyms.join(', ')}
                  </p>
                ) : null}
                {info[0].meanings[2]?.partOfSpeech ? (
                  <p>Part Of Speech: {info[0].meanings[2]?.partOfSpeech}</p>
                ) : null}
                {info[0].meanings[2]?.definitions[0].definition ? (
                  <p>
                    Meaning: {info[0].meanings[2]?.definitions[0].definition}
                  </p>
                ) : null}
                {info[0].meanings[2]?.definitions[0].example ? (
                  <p>Example: {info[0].meanings[2]?.definitions[0].example}</p>
                ) : null}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DictionaryPageLayout;
