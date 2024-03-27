import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmToMeter',
  standalone: true,
})
export class CmToMeterPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null || isNaN(value)) {
      return '';
    }
    const meters = value / 100;

    return meters.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
