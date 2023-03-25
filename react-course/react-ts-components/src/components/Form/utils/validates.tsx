export const validateTitle = (name: string) => {
  if (name.length > 4) return true;
  return false;
};

export const validateImageUrl = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export const validateDate = (name: string) => {
  const inputDate = new Date(name);
  const currentDate = new Date();

  if (inputDate > currentDate) {
    return true;
  }
  return false;
};

export const validateCategory = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export const validateBrand = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export const validatePrice = (price: number): boolean => {
  if (isNaN(price) || price <= 0) {
    return false;
  }
  return true;
};
