import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  private router = inject(Router)

  constructor() { }

  ngOnInit(): void {
  }

  getSearch(name: string, type: string): void {
    this.router.navigate(
      ["/result"],
      {queryParams: {
        'name': name,
        'type': type
        }
      }
    )
  }
}
