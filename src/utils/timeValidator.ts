import { IAlert } from '../common/Interfaces';

function timeValidator(time: string): IAlert {
  const alert: IAlert = {
    title: 'campo Hora',
    message: 'Desculpe, ',
    hasError: false,
  };

  // regular expression to match required time format
  const regularExpression = /^(\d{1,2}):(\d{2})(:00)?([ap]m)?$/;
  const match = time.match(regularExpression);

  if (match) {
    // if ((match[4] && Number(match[1]) < 1) || Number(match[1]) > 12) {
    //   // errorMsg = "Invalid value for hours: " + regs[1];
    //   console.log(`Invalid value for hours: ${match[1]}`);

    //   alert.hasError = true;
    //   // 24-hour time format
    // }
    // 12-hour time format with am/pm
    if (Number(match[1]) > 23) {
      // console.log(`Invalid value for hours: ${match[1]}`);
      alert.message += 'O valor de hora está inválido';
      alert.hasError = true;
    }
    if (!alert.hasError && Number(match[2]) > 59) {
      // console.log(`Invalid value for minutes: ${match[2]}`);
      alert.message += 'O valor de minutos está inválido';
      alert.hasError = true;
    }
  } else {
    // console.log(`Invalid time format: ${time}`);
    alert.message += 'O campo Hora está inválido';
    alert.hasError = true;
  }

  return alert;
}

export default timeValidator;
