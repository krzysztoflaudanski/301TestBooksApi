module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  if (!(/^[A-Za-z\s]+$/.test(fullName))) return 'Error';
  if (fullName.split(' ').length !== 2) return 'Error';
  if (fullName.length < 2) return 'Error';
  const [firstName, lastName] = fullName.split(' ');
  if (!firstName || !lastName) return false;
  if (firstName.length < 2 || lastName.length < 2) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};

