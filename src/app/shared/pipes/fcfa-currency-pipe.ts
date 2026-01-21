import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fcfaCurrency',
})
export class FcfaCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
