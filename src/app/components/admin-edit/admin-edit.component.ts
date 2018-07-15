import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BnkService } from '../../services/bnk.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Member } from '../../models/member';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  member: Member;
  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private bnkService: BnkService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.memberForm = this.fb.group({
      name: '',
      instagramId: '',
      imgUrl: ''
    });
    this.reset();
  }

  reset() {
    let id = this.route.snapshot.paramMap.get('memberId')
    this.bnkService.profile(id).subscribe(data => {
      this.member = data
      this.memberForm.setValue({
        name: this.member.name,
        instagramId: this.member.instagramId,
        imgUrl: this.member.imgUrl
      })
    });
  }
}
