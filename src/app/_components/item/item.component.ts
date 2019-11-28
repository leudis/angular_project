import { Item } from './../../_objects/Item';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../../_services/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemtest: Item;
  itemSubscription: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemSubscription = this.itemService.$visible.subscribe((item: Item) => {
    this.itemtest.isVisible = item.title === this.itemtest.title;
    console.log("ngOnInit");
  });
}

  ngOnDestroy() {
    if (this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

  toggle(){
    this.itemService.$visible.next(this.itemtest);
  }

}
