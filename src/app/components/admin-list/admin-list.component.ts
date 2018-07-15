import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

    members: Member[];

    constructor(private bnkService: BnkService) { }

  ngOnInit() {
        this.bnkService.list().subscribe(data => this.members = data);
  }

}
