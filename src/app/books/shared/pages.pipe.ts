import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {
  transform(value: number, param = 'Hurz'): string {
    console.log('Pipe =>', param, value);
    return `${param}: ${value}`;
  }
}
