import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import styles from './style.module.scss';

const HomePageLayout = ({ handleGoToWord }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (word) => {
    handleGoToWord(word.searchWord);
  };

  return (
    <div className={styles.search}>
      <p>Search a word to get the definition:</p>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          className='styles.input'
          placeholder='Search'
          variant='filled'
          color='primary'
          focused
          {...register('searchWord', { required: true, minLength: 1 })}
        />

        <Button variant='outlined' type='submit'>
          Search
        </Button>
        {errors.searchWord && (
          <p>The minimum length of a word is one character.</p>
        )}
      </Box>
    </div>
  );
};

export default HomePageLayout;
