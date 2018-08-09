import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false,
})
export class OrderPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.sort(function(a: any, b: any) {
      let a1 = a[args];
      let b1 = b[args];
      if (typeof a1 === 'string') {
        a1 = a1.toLowerCase();
        b1 = b1.toLowerCase();
      }
      if (a1 < b1) {
        return -1;
      } else if (a1 > b1) {
        return 1;
      }
      return 0;
    });
  }
}
