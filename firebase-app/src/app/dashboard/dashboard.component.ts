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

  ngOnInit() {
    this.getItemsList();
  }
  onSubmit(data) {
    console.log('form data', data);
    this.userObj = data;
    this.getItems(this.userObj);
  }

  getItems(record) {
    this.firstService.getFirstData(record).subscribe(res => {
      console.log('res', res);
      this.getItemsList();
    });
  }
  getItemsList() {
    this.firstService.getItemsList().subscribe(res => {
      console.log('reslist', res);
      // this.items = res;
      this.items = Object.entries(res).map(list => Object.assign({}, { key: list[0] }, list[1]));
      console.log('this.items ', this.items );
    });
  }
  onEdit(item) {
    console.log('edit', item);
    this.userForm.setValue({
      name : item.name,
      email : item.email
    });
  }
  onDelete(item) {
    this.items.splice(0, 1);
  }
}
