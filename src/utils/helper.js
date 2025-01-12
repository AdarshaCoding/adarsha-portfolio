export const calculateAge = (dob) => {
  const dobDate = new Date(dob);
  const ageInMilliseconds = new Date() - dobDate;
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)
  );
  return ageInYears;
};
