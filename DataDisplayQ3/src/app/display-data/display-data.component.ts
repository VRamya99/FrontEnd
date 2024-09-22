import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  loading: boolean = true;
  totalItems:number=0;
  pageSize:number=10;
  currentPage:number=0;
  data: any[] = [];
pageData:any[]=[];
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.service.getDogDetails().subscribe((data) => {
      this.data = data;
      this.totalItems=this.data.length
      this.loading = false;
     this.updatePageData()
    }, (error) => {
      console.log(error);
      this.loading = false;
    });
  }

  updatePageData()
  {
    const startIndex=this.currentPage*this.pageSize;
    const endIndex=startIndex+this.pageSize;
this.pageData=this.data.slice(startIndex,endIndex)
  }
  onPageChange(event:PageEvent)
  {
    this.currentPage=event.pageIndex;
    this.pageSize=event.pageSize;
    this.updatePageData()

  }
}
