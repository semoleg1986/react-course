export const validateTitle = (name: string) => {
  if (name.length > 3 && /^[A-Z]/.test(name) && !/^\d/.test(name)) {
    return true;
  }
  return false;
};

export const validateImageUrl = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export const validateDate = (name: string) => {
  const inputDate = new Date(name);
  const currentDate = new Date();
  const maxDate = new Date(
    currentDate.getFullYear() + 10,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  if (inputDate > currentDate && inputDate <= maxDate) {
    return true;
  }
  return false;
};

export const validateCategory = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export const validateBrand = (selectedValue: string) => {
  if (selectedValue && selectedValue.length > 2) {
    return true;
  }
  return false;
};

export const validatePrice = (price: number): boolean => {
  if (isNaN(price) || price <= 0) {
    return false;
  }
  return true;
};
