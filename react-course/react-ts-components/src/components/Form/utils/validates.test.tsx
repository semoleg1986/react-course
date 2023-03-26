import {
  validateTitle,
  validateImageUrl,
  validateDate,
  validateCategory,
  validateBrand,
  validatePrice,
} from './validates';

describe('validateTitle', () => {
  it('returns true if the title is valid', () => {
    const validTitle = 'Valid Title';
    expect(validateTitle(validTitle)).toBe(true);
  });

  it('returns false if the title is invalid', () => {
    const invalidTitle = 'invalid title';
    expect(validateTitle(invalidTitle)).toBe(false);
  });
});

describe('validateImageUrl', () => {
  it('returns true if the image URL is not empty', () => {
    const validImageUrl = 'https://example.com/image.jpg';
    expect(validateImageUrl(validImageUrl)).toBe(true);
  });

  it('returns false if the image URL is empty', () => {
    const emptyImageUrl = '';
    expect(validateImageUrl(emptyImageUrl)).toBe(false);
  });
});

describe('validateDate', () => {
  it('returns true if the date is valid', () => {
    const validDate = '2023-03-26';
    expect(validateDate(validDate)).toBe(true);
  });

  it('returns false if the date is in the past', () => {
    const invalidPastDate = '2020-01-01';
    expect(validateDate(invalidPastDate)).toBe(false);
  });

  it('returns false if the date is too far in the future', () => {
    const invalidFutureDate = '2040-01-01';
    expect(validateDate(invalidFutureDate)).toBe(false);
  });
});

describe('validateCategory', () => {
  it('returns true if the category is not empty', () => {
    const validCategory = 'Valid Category';
    expect(validateCategory(validCategory)).toBe(true);
  });

  it('returns false if the category is empty', () => {
    const emptyCategory = '';
    expect(validateCategory(emptyCategory)).toBe(false);
  });
});

describe('validateBrand', () => {
  it('returns true if the brand is valid', () => {
    const validBrand = 'Valid Brand';
    expect(validateBrand(validBrand)).toBe(true);
  });

  it('returns false if the brand is too short', () => {
    const shortBrand = 'AB';
    expect(validateBrand(shortBrand)).toBe(false);
  });

  it('returns false if the brand is empty', () => {
    const emptyBrand = '';
    expect(validateBrand(emptyBrand)).toBe(false);
  });
});

describe('validatePrice', () => {
  it('returns true if the price is valid', () => {
    const validPrice = 10;
    expect(validatePrice(validPrice)).toBe(true);
  });

  it('returns false if the price is zero', () => {
    const zeroPrice = 0;
    expect(validatePrice(zeroPrice)).toBe(false);
  });

  it('returns false if the price is negative', () => {
    const negativePrice = -10;
    expect(validatePrice(negativePrice)).toBe(false);
  });

  it('returns false if the price is not a number', () => {
    const invalidPrice = NaN;
    expect(validatePrice(invalidPrice)).toBe(false);
  });
});
