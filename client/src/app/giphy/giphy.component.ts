import { Component, OnInit } from '@angular/core';
import {GiphyService} from "../giphy.service";

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css'],
  providers: [GiphyService]
})
export class GiphyComponent implements OnInit {
  gifs: any[];
  constructor(private gifService: GiphyService) { }

  ngOnInit() {
  }

  search(search: HTMLInputElement): void {

    this.gifService.getGifs(search.value)
        .subscribe((item) => this.gifs = item)
      console.log(search);
  }

}
