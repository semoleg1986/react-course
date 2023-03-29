import React, { useState, useRef } from 'react';
import './FormInput.css';
import { FormAdd } from './utils/Form.type';
import {
  validateTitle,
  validateImageUrl,
  validateDate,
  validateCategory,
  validateBrand,
} from './utils/validates';
import { targetRadio } from './utils/targetRadio';

const FormInput: React.FC<FormAdd> = ({ onAddCard }) => {
  const [titleValid, setTitleValid] = useState(false);
  const [imageValid, setImageValid] = useState(false);
  const [dateValid, setDateValid] = useState(false);
  const [rulesValid, setRulesValid] = useState(false);
  const [brandValid, setBrandValid] = useState(false);
  const [categoryValid, setCategoryValid] = useState(false);
  const [message, setMessage] = useState(false);
  const [formMessage, setFormMessage] = useState(false);

  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);
  const inputDateRef = useRef<HTMLInputElement>(null);
  const inputCategoryRefLaptops = useRef<HTMLInputElement>(null);
  const inputCategoryRefSmartphones = useRef<HTMLInputElement>(null);
  const inputRulesRef = useRef<HTMLInputElement>(null);
  const inputBrandRef = useRef<HTMLSelectElement>(null);

  const checkAllValidates = () => {
    const title = validateTitle(inputTitleRef?.current?.value ?? '');
    const image = validateImageUrl(inputImageRef?.current?.value ?? '');
    const date = validateDate(inputDateRef.current?.value ?? '');
    const category = validateCategory(
      targetRadio(inputCategoryRefLaptops, inputCategoryRefSmartphones)
    );
    const rules = inputRulesRef?.current?.checked ?? false;
    const brand = validateBrand(inputBrandRef.current?.value ?? '');

    setRulesValid(rules);
    setTitleValid(title);
    setImageValid(image);
    setDateValid(date);
    setCategoryValid(category);
    setRulesValid(rules);
    setBrandValid(brand);

    if (title && image && date && category && rules && brand) return true;
    return false;
  };

  const clearForms = () => {
    if (inputTitleRef.current) inputTitleRef.current.value = '';
    if (inputImageRef.current) inputImageRef.current.value = '';
    if (inputDateRef.current) inputDateRef.current.value = '';
    if (inputCategoryRefLaptops.current) inputCategoryRefLaptops.current.checked = false;
    if (inputCategoryRefSmartphones.current) inputCategoryRefSmartphones.current.checked = false;
    if (inputRulesRef.current) inputRulesRef.current.checked = false;
    if (inputBrandRef.current) inputBrandRef.current.value = '';
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const isAllValid = checkAllValidates();

    const currentTitle = inputTitleRef.current?.value ?? '';
    const currentImage = inputImageRef.current?.files?.[0];
    const currentDate = inputDateRef.current?.value ?? '';
    const currentCategory = targetRadio(inputCategoryRefLaptops, inputCategoryRefSmartphones);
    const currentRules = inputRulesRef?.current?.checked ?? false;
    const currentBrand = inputBrandRef.current?.value ?? '';

    if (!isAllValid) {
      setMessage(true);
      return;
    }

    const product = {
      id: Math.trunc(Math.random() * 1e8),
      title: currentTitle,
      imageUrl: (currentImage && URL.createObjectURL(currentImage)) ?? '',
      date: currentDate,
      rules: currentRules,
      category: currentCategory,
      brand: currentBrand,
    };
    onAddCard(product);
    clearForms();
    setFormMessage(true);
  };
  return (
    <div className="box-form">
      <form onSubmit={handleSubmit}>
        <div className="form-box">
          <label className="form-label">Title:</label>
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Enter title"
            ref={inputTitleRef}
          />
          {!titleValid && message && (
            <p className="form-error">
              The title must start with a capital letter and not contain numbers longer than 4
              digits.
            </p>
          )}
        </div>
        <div className="form-box">
          <label className="form-label">Date:</label>
          <input className="form-input" type="date" name="date" ref={inputDateRef} />
          {!dateValid && message && (
            <p className="form-error">The selected date must be later than today.</p>
          )}
        </div>
        <div className="form-box">
          <label className="form-label">Brand:</label>
          <select className="form-input" name="brand" ref={inputBrandRef}>
            <option value="">-</option>
            <option value="Huawei">Huawei</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
          </select>
          {!brandValid && message && <p className="form-error">Please choose a brand.</p>}
        </div>
        <div className="form-box">
          <label className="form-label">Category:</label>
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              name="category"
              value="Smartphones"
              ref={inputCategoryRefSmartphones}
            />
            Smartphones
          </label>
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              name="category"
              value="Laptops"
              ref={inputCategoryRefLaptops}
            />
            Laptops
          </label>
          {!categoryValid && message && <p className="form-error">Please choose a category.</p>}
        </div>
        <div className="form-box">
          <label className="form-label">Image:</label>
          <input
            className="form-input"
            name="imageUrl"
            type="file"
            accept=".jpg, .jpeg, .png"
            id="image-input"
            ref={inputImageRef}
          />
          {!imageValid && message && (
            <p className="form-error">Please choose a valid image file.</p>
          )}
        </div>
        <div className="form-box">
          <label className="form-checkbox-label">
            <input className="form-checkbox-input" type="checkbox" ref={inputRulesRef} />I accept
            the rules.
          </label>
          {!rulesValid && message && <p className="form-error">Please accept the rules.</p>}
        </div>
        <button className="form-button" type="submit">
          Add new card
        </button>
        {formMessage && <p className="form-add">Post successfully added.</p>}
      </form>
    </div>
  );
};

export { FormInput };
