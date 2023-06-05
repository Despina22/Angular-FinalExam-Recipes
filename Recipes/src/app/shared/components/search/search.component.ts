import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../../services/search-service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  onSearchTermChanged(searchValue: string) {
    this.searchService.searchValue$.next(searchValue);
  }
}
