import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/feed';
import { BnkService } from '../../services/bnk.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {

  feeds: Item[];

  constructor(private bnkService: BnkService, private route: ActivatedRoute) { }

  ngOnInit() {
    let userName = this.route.snapshot.paramMap.get('instagramId') 
    this.bnkService.instagram(userName).subscribe(data => this.feeds = data.feeds);
  }

}
