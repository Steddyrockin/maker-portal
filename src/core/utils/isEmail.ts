// Email validation using regular expression
const isEmail = (inputEmail: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputEmail)) {
    return false;
  } else {
    return true;
  }
};

export default isEmail;
