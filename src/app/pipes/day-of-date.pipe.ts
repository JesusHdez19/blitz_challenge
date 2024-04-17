import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayOfDate',
  standalone: true
})
export class DayOfDatePipe implements PipeTransform {

  transform(value: any) {
    const actualDate = new Date()
    const valueDate = new Date(value)
    if(actualDate.getDay() === valueDate.getDay()){
      return 'Hoy'
    }else{
      return valueDate.toLocaleString('es-mx', {weekday:'long'})
    }
  }

}
