import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {filter, map, Observable, Subscription} from 'rxjs';
import {DataService} from '../shared/data.service';
import {ActivatedRoute} from '@angular/router';
import {ItemInterface} from '../shared/item.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  private subscription?: Subscription

  data$?: Observable<ItemInterface[]>

  private dataService = inject(DataService)
  private route = inject(ActivatedRoute)

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe(
      (queryParam) => {
        this.data$ = this.dataService.getData().pipe(
          map((item, i) => {
              if (item[i].name.toLowerCase() !== queryParam['name'].toLowerCase() &&
                  item[i].type.toLowerCase() !== queryParam['type'].toLowerCase()
              ) {
                return item
              }
              return item.filter(e =>
                e.name.toLowerCase() === queryParam['name'].toLowerCase() &&
                e.type.toLowerCase() === queryParam['type'].toLowerCase()
              )
            }
          )
        )
      }
    )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

}
