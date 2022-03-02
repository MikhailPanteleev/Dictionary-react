import { useForm } from 'react-hook-form';

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
    <div>
      <h1>Free Dictionary API</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder='Search'
            type='text'
            {...register('searchWord', { required: true, minLength: 1 })}
          />
          <button type='submit'>search</button>
          {errors.searchWord && (
            <p>The minimum length of a word is one character.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default HomePageLayout;
