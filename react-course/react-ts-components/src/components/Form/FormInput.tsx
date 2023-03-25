import React from 'react';
import './FormInput.css';
import { IFormValid } from './utils/Form.props';
import { FormAdd } from './utils/Form.type';
import {
  validateTitle,
  validateImageUrl,
  validateDate,
  validateCategory,
  validateBrand,
} from './utils/validates';
import { targetRadio } from './utils/targetRadio';

class FormInput extends React.Component<FormAdd, IFormValid> {
  inputTitleRef: React.RefObject<HTMLInputElement>;
  inputImageRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  inputCategoryRefLaptops: React.RefObject<HTMLInputElement>;
  inputCategoryRefSmartphones: React.RefObject<HTMLInputElement>;
  inputRulesRef: React.RefObject<HTMLInputElement>;
  inputBrandRef: React.RefObject<HTMLSelectElement>;

  constructor(props: FormAdd) {
    super(props);
    this.state = {
      titleValid: false,
      imageValid: false,
      imageUrl: '',
      dateValid: false,
      rulesValid: false,
      brandValid: false,
      categoryValid: false,
      message: false,
      formMessage: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitleRef = React.createRef();
    this.inputImageRef = React.createRef();
    this.inputDateRef = React.createRef();
    this.inputCategoryRefLaptops = React.createRef();
    this.inputCategoryRefSmartphones = React.createRef();
    this.inputRulesRef = React.createRef();
    this.inputBrandRef = React.createRef();
  }

  checkAllValidates() {
    const title = validateTitle(this.inputTitleRef?.current?.value ?? '');
    const image = validateImageUrl(this.inputImageRef?.current?.value ?? '');
    const date = validateDate(this.inputDateRef.current?.value ?? '');
    const category = validateCategory(
      targetRadio(this.inputCategoryRefLaptops, this.inputCategoryRefSmartphones)
    );
    const rules = this.inputRulesRef?.current?.checked ?? false;
    const brand = validateBrand(this.inputBrandRef.current?.value ?? '');

    this.setState({ rulesValid: rules });
    this.setState({ titleValid: title });
    this.setState({ imageValid: image });
    this.setState({ dateValid: date });
    this.setState({ categoryValid: category });
    this.setState({ rulesValid: rules });
    this.setState({ brandValid: brand });

    if (title && image && date && category && rules && brand) return true;
    return false;
  }

  clearForms() {
    if (this.inputTitleRef.current) this.inputTitleRef.current.value = '';
    if (this.inputImageRef.current) this.inputImageRef.current.value = '';
    if (this.inputDateRef.current) this.inputDateRef.current.value = '';
    if (this.inputCategoryRefLaptops.current) this.inputCategoryRefLaptops.current.checked = false;
    if (this.inputCategoryRefSmartphones.current)
      this.inputCategoryRefSmartphones.current.checked = false;
    if (this.inputRulesRef.current) this.inputRulesRef.current.checked = false;
    if (this.inputBrandRef.current) this.inputBrandRef.current.value = '';
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const isAllValid = this.checkAllValidates();

    // Variables
    const currentTitle = this.inputTitleRef.current?.value ?? '';
    const currentImage = this.inputImageRef.current?.files?.[0];
    const currentDate = this.inputDateRef.current?.value ?? '';
    const currentCategory = targetRadio(
      this.inputCategoryRefLaptops,
      this.inputCategoryRefSmartphones
    );
    const currentRules = this.inputRulesRef?.current?.checked ?? false;
    const currentBrand = this.inputBrandRef.current?.value ?? '';

    if (!isAllValid) {
      this.setState({ message: true });
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

    this.setState({
      titleValid: validateTitle(currentTitle),
      imageValid: validateImageUrl(this.inputImageRef?.current?.value ?? ''),
      dateValid: validateDate(currentDate),
      categoryValid: validateCategory(currentCategory),
      brandValid: validateBrand(currentBrand),
      rulesValid: currentRules,
    });

    this.clearForms();
    this.props.onAddCard(product);
    this.setState({ formMessage: true });
    setTimeout(() => {
      this.setState({ formMessage: false });
    }, 3000);
  }
  render() {
    return (
      <div className="box-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-box">
            <label className="form-label">Title:</label>
            <input
              className="form-input"
              type="text"
              name="title"
              placeholder="Enter title"
              ref={this.inputTitleRef}
            />
            {!this.state.titleValid && this.state.message && (
              <p className="form-error">
                The title must start with a capital letter and not contain numbers longer than 4
                digits.
              </p>
            )}
          </div>
          <div className="form-box">
            <label className="form-label">Date:</label>
            <input className="form-input" type="date" name="date" ref={this.inputDateRef} />
            {!this.state.dateValid && this.state.message && (
              <p className="form-error">The selected date must be later than today.</p>
            )}
          </div>
          <div className="form-box">
            <label className="form-label">Brand:</label>
            <select className="form-input" name="brand" ref={this.inputBrandRef}>
              <option value="">-</option>
              <option value="Huawei">Huawei</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
            </select>
            {!this.state.brandValid && this.state.message && (
              <p className="form-error">Please choose a brand.</p>
            )}
          </div>
          <div className="form-box">
            <label className="form-label">Category:</label>
            <label className="form-radio-label">
              <input
                className="form-radio-input"
                type="radio"
                name="category"
                value="Smartphones"
                ref={this.inputCategoryRefSmartphones}
              />
              Smartphones
            </label>
            <label className="form-radio-label">
              <input
                className="form-radio-input"
                type="radio"
                name="category"
                value="Laptops"
                ref={this.inputCategoryRefLaptops}
              />
              Laptops
            </label>
            {!this.state.categoryValid && this.state.message && (
              <p className="form-error">Please choose a category.</p>
            )}
          </div>
          <div className="form-box">
            <label className="form-label">Image:</label>
            <input
              className="form-input"
              name="imageUrl"
              type="file"
              accept=".jpg, .jpeg, .png"
              id="image-input"
              ref={this.inputImageRef}
            />
            {!this.state.imageValid && this.state.message && (
              <p className="form-error">Please choose a valid image file.</p>
            )}
          </div>
          <div className="form-box">
            <label className="form-checkbox-label">
              <input className="form-checkbox-input" type="checkbox" ref={this.inputRulesRef} />I
              accept the rules.
            </label>
            {!this.state.rulesValid && this.state.message && (
              <p className="form-error">Please accept the rules.</p>
            )}
          </div>
          <button className="form-button" type="submit">
            Add new card
          </button>
          {this.state.formMessage && <p className="form-add">Post successfully added.</p>}
        </form>
      </div>
    );
  }
}

export { FormInput };
