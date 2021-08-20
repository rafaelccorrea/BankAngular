import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpfCnpjService {

  constructor() { }

  convertToCpfCnpj(num) {
    if (num) {
        num = num.toString();
        num = num.replace(/\D/g, "");

        switch (num.length) {
            case 4:
                num = num.replace(/(\d+)(\d{3})/, " $1.$2");
                break;
            case 5:
                num = num.replace(/(\d+)(\d{3})/, " $1.$2");
                break;
            case 6:
                num = num.replace(/(\d+)(\d{3})/, " $1.$2");
                break;
            case 7:
                num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
                break;
            case 8:
                num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
                break;
            case 9:
                num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
                break;
            case 10:
                num = num.replace(/(\d+)(\d{3})(\d{3})(\d{1})/, " $1.$2.$3-$4");
                break;
            case 11:
                num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, " $1.$2.$3-$4");
                break;
            case 12:
                num = num.replace(/(\d+)(\d{3})(\d{3})(\d{4})/, " $1.$2.$3/$4");
                break;
            case 13:
                num = num.replace(/(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/, " $1.$2.$3/$4-$5");
                break;
            case 14:
                num = num.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, " $1.$2.$3/$4-$5");
                break;
        }
    }
    return num;
}

retiraPontuacao(num: string) {
  num = num.replace(/\./g,'')
  num = num.replace('-', '');
  num = num.replace('/', '');
  return num;
}

}
