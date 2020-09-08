import { IAlert } from '../common/Interfaces';

interface Field {
  field: string | number;
  name: string;
}

function fieldIsEmptyValidator(fields: Field[]): IAlert {
  const alert: IAlert = {
    title: 'Preencha os seguintes campos',
    message: '',
    hasError: false,
  };

  fields.forEach(field => {
    if (typeof field.field === 'number' && field.field === 0)
      alert.message += `${field.name}\n`;
    if (typeof field.field === 'string' && !field.field.length)
      alert.message += `${field.name}\n`;
  });

  alert.hasError = !!alert.message.length;

  return alert;
}

export default fieldIsEmptyValidator;
