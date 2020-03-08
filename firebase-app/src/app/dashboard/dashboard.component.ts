import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list = [];
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter Name',
        required: true,
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];
  constructor(private firstService: FirstService) { }

  ngOnInit() {
    // this.getFirstData();
  }
  submit(event) {
    console.log('model', event);
    this.list.push(this.model);
  }
  onEdit(event) {
    console.log('event', event);
  }
  onDelete(event) {
    console.log('event', event);
  }
  // getFirstData() {
  //   const payload = {};
  //   this.firstService.getFirstData(payload);
  // }

}
