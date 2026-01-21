import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fcfaCurrency',
  standalone: true,
})
export class FcfaCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('fr-FR').format(Number(value)) + ' FCFA';
  }
}
