import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState } from 'react';
import './FormInput.css';
import { FormAdd } from './utils/Form.type';
import { ICard } from '../Card/Card.props';

const FormInput: React.FC<{
  onAddCard: (product: ICard) => void;
}> = ({ onAddCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormAdd>({ reValidateMode: 'onSubmit' });
  const validateDate = (date: string) => {
    const today = new Date();
    const inputDate = new Date(date);
    if (inputDate > today) {
      return 'Date should be no later than today';
    }
    return true;
  };
  const [formMessage, setFormMessage] = useState<boolean>(false);
  const handleProduct: SubmitHandler<FormAdd> = (data) => {
    const product = {
      id: Date.now(),
      ...data,
      imageURL: URL.createObjectURL(data.imageURL[0] as unknown as Blob),
    };
    reset();
    onAddCard(product);
    setFormMessage(true);
    setTimeout(() => setFormMessage(false), 4000);
  };
  return (
    <div className="box-form">
      <form role="form" onSubmit={handleSubmit(handleProduct)} noValidate>
        <div className="form-box">
          <label className="form-label" htmlFor="name">
            First Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            placeholder="Enter title"
            {...register('name', {
              required: 'The field is required',
              pattern: {
                value: /^[A-Z].*/,
                message: 'Start with a capital letter',
              },
            })}
          />
          <p className="form-error">{errors.name?.message && errors.name.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="surname">
            Last name:
          </label>
          <input
            className="form-input"
            type="text"
            id="surname"
            placeholder="Enter title"
            {...register('surname', {
              required: 'The field is required',
              pattern: {
                value: /^[A-Z].*/,
                message: 'Start with a capital letter',
              },
            })}
          />
          <p className="form-error">{errors.surname?.message && errors.surname.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="date">
            Date of Birth:
          </label>
          <input
            className="form-input"
            type="date"
            id="date"
            {...register('date', { required: 'The field is required', validate: validateDate })}
          />
          <p className="form-error">{errors.date?.message && errors.date.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="gender">
            Gender:
          </label>
          <select
            className="form-input"
            {...register('gender', { required: 'The field is required' })}
          >
            <option value="">-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <p className="form-error">{errors.gender?.message && errors.gender.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="category">
            Category:
          </label>
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              id="movies"
              value="Movies"
              {...register('category', {
                required: 'The field is required',
              })}
            />
            Movies
          </label>
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              value="TV"
              id="tv"
              {...register('category', {
                required: 'The field is required',
              })}
            />
            TV Shows
          </label>
          <p className="form-error">{errors.category?.message && errors.category.message}</p>
        </div>
        <div className="form-box">
          <label className="form-label">Image:</label>
          <input
            className="form-input"
            type="file"
            accept=".jpg, .jpeg, .png"
            id="imageURL"
            {...register('imageURL', {
              required: 'The field is required',
            })}
          />
          <p className="form-error">{errors.imageURL?.message && errors.imageURL.message}</p>
        </div>
        <div className="form-box">
          <label className="form-checkbox-label">
            <input
              id="rules"
              className="form-checkbox-input"
              type="checkbox"
              {...register('rules', {
                required: 'The field is required',
              })}
            />
            I accept the rules.
          </label>
          <p className="form-error">{errors.rules?.message && errors.rules.message}</p>
        </div>
        <button className="form-button" type="submit">
          Add new card
        </button>
        {formMessage && <p className="form-add">The data has been added to your list</p>}
      </form>
    </div>
  );
};
export default FormInput;
