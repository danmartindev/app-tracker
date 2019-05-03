import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface JobApp {
  company: string,
  dateApplied: Date, 
  location: string,
  title: string,
  replied: boolean,
  status: string
}



@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  APP_DATA: JobApp[] = [
    { company: "IBM", 
      dateApplied: new Date('May 1, 2019'), 
      location: "Raleigh", 
      title: "Developer", 
      replied: true, 
      status: "Interview for Monday"
    },
    { company: "Company 1", 
      dateApplied: new Date('May 1, 2019'), 
      location: "Somewhere", 
      title: "JR Developer", 
      replied: false, 
      status: "Interview for Monday"
    },
    { 
      company: "IBM", 
      dateApplied: new Date('May 1, 2019'), 
      location: "Raleigh", 
      title: "Developer", 
      replied: true, 
      status: "Interview for Monday"
    }
  ];

  appTableColumns: string[] = ['company', 'dateApplied', 'location', 'title', 'replied', 'status'];
  appDataSource = new MatTableDataSource(this.APP_DATA);

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.appDataSource.sort = this.sort;
  }

  appSubmit(){
    //event.preventDefault();
    console.log("Submitted");
    var newApp: JobApp = 
    {
      company: "Test", 
      dateApplied: new Date('May 1, 2019'), 
      location: "Raleigh", 
      title: "Developer", 
      replied: true, 
      status: "Interview for Monday"
    };
    this.appDataSource.data.push(newApp);
    console.log(JSON.stringify(this.appDataSource.data));
  }
}
