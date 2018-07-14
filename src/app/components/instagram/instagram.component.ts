import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/feed';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  @Input() feed: Item;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.route.snapshot.paramMap.get('instagramId'));
  }

}
