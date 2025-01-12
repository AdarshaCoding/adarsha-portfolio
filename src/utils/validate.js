export const checkValidateData = (name, email, phone, service, textArea) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPhoneValid = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(
    phone
  );

  const isTextAreaValid = /\b([A-Za-z][-,a-z. ']+[ ]*)+/.test(textArea);
  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPhoneValid) return "Phone number is not valid";
  if (!service) return "Please choose any one of the services";
  if (!isTextAreaValid) return "Text area is not valid";

  return null;
};
