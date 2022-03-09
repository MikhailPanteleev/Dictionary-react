import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import { GET_WORD_REQUEST } from '../../HomePage/actions';

import DictionaryPageLayout from '../components/DictionaryPageLayout';

const DictionaryPageContainer = () => {
  const dispatch = useDispatch();
  const { info, isLoading, isError, error } = useSelector(
    (state) => state.word
  );
  const { word } = useParams();

  useLayoutEffect(() => {
    dispatch(GET_WORD_REQUEST(word));
  }, [dispatch, word]);

  return (
    <DictionaryPageLayout
      info={info}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};

export default DictionaryPageContainer;
