import {Injectable} from '@angular/core';
import {ItemInterface} from './item.interface';
import {Observable, of} from 'rxjs';
import {items} from './mock-items'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<ItemInterface[]> {
    return of(items)
  }
}
