import { Component, OnInit } from '@angular/core';
import { DataService } from '../apidata.service';

export interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})


export class DataComponent implements OnInit {

  public errorMsg: any
  posts: any = []


  public page = 1;
  public pageSize = 5;
  totalRecords: any;

  constructor(private post: DataService) { 
  }

  ngOnInit(): void {
    this.post.getPost().subscribe(data => this.posts = data,
      error => this.errorMsg = error)

      this.totalRecords = this.posts.length
    
  }
  
  

}
