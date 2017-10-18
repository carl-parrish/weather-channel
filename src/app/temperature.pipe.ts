import { DecimalPipe } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, scale: string): any {
    return new DecimalPipe('value').transform('.2') + '&deg;' + scale;
  }

}
