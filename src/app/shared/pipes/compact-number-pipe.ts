import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compactNumber',
  standalone: true,
})
export class CompactNumberPipe implements PipeTransform {
  transform(value: number): string {
    let number;

    if (value >= 1000000) {
      number = (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      number = (value / 1000).toFixed(1) + 'K';
    } else {
      number = value.toString();
    }

    return number.toString();
  }
}
