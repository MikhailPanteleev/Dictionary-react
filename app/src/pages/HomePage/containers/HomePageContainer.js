import HomePageLayout from '../components/HomePageLayout';

import { useHistory } from 'react-router-dom';

const HomePageContainer = () => {
  const history = useHistory();

  const handleGoToWord = (word) => {
    history.push(`/dictionary/${word}`);
  };

  return <HomePageLayout handleGoToWord={handleGoToWord} />;
};

export default HomePageContainer;
