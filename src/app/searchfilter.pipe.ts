import { GroceryList } from './grocery-list/model/groceryList.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(groceryList: GroceryList[], searchValue: string): GroceryList[] {

    if (!groceryList || !searchValue) {
      return groceryList;
    }

    return groceryList.filter(grocery =>
      grocery.item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
