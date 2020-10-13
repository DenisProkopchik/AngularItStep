import { from } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dateNormal'
})
export class dateNormalPipe implements PipeTransform {
  transform(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  }

}