import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, scale: string): any {
    return new DecimalPipe('en-us').transform(Math.round(value), '1') + '\xB0' + scale;
  }

}
