import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
 
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc';
  itemsShowCount = 12;
  @Output() columnsCountChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
