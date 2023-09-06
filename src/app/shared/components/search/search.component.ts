import { Component } from '@angular/core';
import { SearchService } from '../../services/search-service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}

  onSearchTermChanged(searchValue: string) {
    this.searchService.searchValue$.next(searchValue);
  }
}
