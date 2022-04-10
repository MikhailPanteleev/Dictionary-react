import api from '../../../http';

export const getWord = (searchWord) =>
  api.get(`/api/v2/entries/en/${searchWord}`);
