import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathRoundNumber',
  standalone: true
})
export class MathRoundNumberPipe implements PipeTransform {

  transform(value: any) {
    return Math.round(parseFloat(value.toString()));
  }

}
