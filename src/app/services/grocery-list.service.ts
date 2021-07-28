import { GroceryList } from './../grocery-list/model/groceryList.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  groceryList: GroceryList[] = JSON.parse(localStorage.getItem('itemsData') || '{}');
  sum: number = 0;
  totalprice: number = 0;
  grandtotal: number = 0

  constructor() { }

  onGetGrand() {
    return this.grandtotal
  }
  onGet() {
    this.sum = 0
    for (let i = 0; i < this.groceryList.length; i++) {
      this.totalprice = (this.groceryList[i].unit * this.groceryList[i].unitprice)
      this.sum += this.totalprice
    }
    this.grandtotal = this.sum

    return this.groceryList
  }
  onGetgroceryList(id: number) {
    return this.groceryList.find(x => x.id === id);
  }
  onAdd(groceryList: GroceryList) {
    this.groceryList.push(groceryList)
    console.log(localStorage.setItem('itemsData', JSON.stringify(this.groceryList)));
  }
  onDelete(id: number) {
    let employee = this.groceryList.find(x => x.id === id);
    let index = this.groceryList.indexOf(employee!, 0)
    for (let i = 0; i < this.groceryList.length; i++) {
      this.totalprice = (this.groceryList[i].unit * this.groceryList[i].unitprice)
    }
    let deltedTotalValue = this.totalprice;
    this.grandtotal -= deltedTotalValue

    this.groceryList.splice(index, 1)
    localStorage.setItem('itemsData', JSON.stringify(this.groceryList))
    return this.grandtotal
  }

  onUpdate(groceryList: GroceryList) {
    let oldGroceryList = this.groceryList.find(x => x.id === groceryList.id)!
    oldGroceryList.item = groceryList.item
    oldGroceryList.unit = groceryList.unit
    oldGroceryList.unitprice = groceryList.unitprice
    this.totalprice = (oldGroceryList.unit * oldGroceryList.unitprice)
  }
}
