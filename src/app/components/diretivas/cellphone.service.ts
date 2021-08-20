import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CellphoneService{

  constructor() { }

  convertToCellphone(num) {
    if (num) {
        num = num.toString();
        num = num.replace(/\D/g, "");

        switch (num.length) {
            case 4:
              num = this.retiraPontuacao(num);
            num = num.replace(/^(\d{2})(\d)/g,"($1) $2");
            break;

             case 6:
              num = this.retiraPontuacao(num);
             num = num.replace(/^(\d{2})(\d)/g,"($1) $2");
             break;

             case 8:
              num = this.retiraPontuacao(num);
              num = num.replace(/(\d{2})(\d{5})/g, " ($1) $2-");
            break;
        }
    }
    return num;
}

retiraPontuacao(num: string) {
  num = num.replace(/\./g,'')
  num = num.replace('-', '');
  num = num.replace('()', '');
  return num;
}

}
