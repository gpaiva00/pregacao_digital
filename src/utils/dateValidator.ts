import { IAlert } from '../common/Interfaces';

function dateValidator(date: string): IAlert {
  const alert: IAlert = {
    title: 'campo Data',
    message: 'Desculpe, ',
    hasError: false,
  };

  const minYear = 1902;
  const maxYear = new Date().getFullYear();

  // regular expression to match required date format
  const regularExpression = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  const match = date.match(regularExpression);

  if (match) {
    if (Number(match[1]) < 1 || Number(match[1]) > 31) {
      // errorMsg = `Invalid value for day: ${Number(match[1])}`;
      alert.message += 'o valor para dia está inválido';
      alert.hasError = true;
    } else if (Number(match[2]) < 1 || Number(match[2]) > 12) {
      // errorMsg = `Invalid value for month: ${Number(match[2])}`;
      alert.message += 'o valor para mês está inválido';
      alert.hasError = true;
    } else if (Number(match[3]) < minYear || Number(match[3]) > maxYear) {
      // errorMsg = `Invalid value for year: ${Number(match[3])} - must be between ${minYear} and ${maxYear}`;
      alert.message += 'o valor para ano está inválido';
      alert.hasError = true;
    }
  } else {
    // errorMsg = `Invalid date format: ${date}`;
    alert.message += 'o campo Data está inválido';
    alert.hasError = true;
  }

  return alert;
}

export default dateValidator;
