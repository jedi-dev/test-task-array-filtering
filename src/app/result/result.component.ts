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
          map(item => item.filter(e =>
            e.name === queryParam['name'] &&
            e.type === queryParam['type']
          ))
        )
      }
    )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

}
