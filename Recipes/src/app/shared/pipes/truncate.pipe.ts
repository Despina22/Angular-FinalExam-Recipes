import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, charactersLimit: number): string {
    if (value.length > charactersLimit) {
      return value.substring(0, charactersLimit) + ' ...';
    }
    return value;
  }
}
