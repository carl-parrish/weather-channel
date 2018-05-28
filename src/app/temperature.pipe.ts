import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, scale: string): any {
    return new DecimalPipe('en-us').transform(value, '1.0-0') + '\xB0' + scale;
  }

}
