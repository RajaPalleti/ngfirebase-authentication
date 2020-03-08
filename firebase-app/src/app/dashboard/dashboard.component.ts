import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  submitted = false;
  vehicles = ['Bike', 'Car', 'Bus'];
  selectedVehicles = [];
  vehicleError = false;
  public userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    gender: ['', Validators.required],
    favVehicles: this.getVehiclesControls()
  });
  public items = [];
  public userObj = {};
  constructor(private firstService: FirstService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getItemsList();
  }
  getVehiclesControls() {
    const arr = this.vehicles.map(element => {
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }
  get vehicleArray() {
    return <FormArray>this.userForm.get('favVehicles');
  }
  getselectedVehicles() {
    this.selectedVehicles = [];
    this.vehicleArray.controls.forEach((element, i) => {
      // console.log('element', element);
      if (element.value) {
        this.selectedVehicles.push(this.vehicles[i]);
      }
    });
    this.vehicleError =  this.selectedVehicles.length > 0 ? false : true;
  }
  onSubmit() {
    const finalVehicles = this.selectedVehicles;
    console.log('form data', ({...this.userForm.value, finalVehicles}));
    this.submitted = true;
    this.userObj = this.userForm.value;
    this.getItems(this.userObj);
    this.getselectedVehicles();
  }

  getItems(record) {
    this.firstService.getFirstData(record).subscribe(res => {
      console.log('res', res);
      this.getItemsList();
    });
  }
  getItemsList() {
    this.firstService.getItemList().subscribe(res => {
      console.log('reslist', res);
      // this.items = res;
      this.items = Object.entries(res).map(list => Object.assign({}, { key: list[0] }, list[1]));
      console.log('this.items ', this.items);
    });
  }
  onEdit(item) {
    console.log('edit', item);
    this.userForm.setValue({
      name: item.name,
      email: item.email
    });
  }
  onDelete(item) {
    this.items.splice(0, 1);
  }
}
