import * as HomePageAction from '../pages/HomePage/actions';
import * as HomePageAPI from '../pages/HomePage/api';

const apiCallsMapping = (action) => {
  const mapping = {
    [HomePageAction.GET_WORD_REQUEST]: HomePageAPI.getWord,
  };
  return mapping[action.type];
};

export default apiCallsMapping;
