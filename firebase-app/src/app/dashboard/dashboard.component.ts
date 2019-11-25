import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['']
  });
  public items = [];
  public userObj = {};
  constructor(private firstService: FirstService, private fb: FormBuilder) { }

  ngOnInit() {}
  onSubmit(data) {
    console.log('form data', data);
    this.userObj = data;
    this.getItems(this.userObj);
  }

  getItems(record) {
    this.firstService.getFirstData(record).subscribe(res => {
      console.log('res', res);
    });
  }
}
