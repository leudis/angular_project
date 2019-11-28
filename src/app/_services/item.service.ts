import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../_objects/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public $visible = new Subject<Item>();
  constructor() { }
}
