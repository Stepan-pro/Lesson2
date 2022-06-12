import { Component, OnInit } from '@angular/core';
import {IComments} from "../../../models/IComments";
import {CommentsService} from "../../comments-service/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComments[];

  constructor(private commentsServices: CommentsService) { }

  ngOnInit(): void {
    this.commentsServices.getComments().subscribe(res=> this.comments=res)
  }

}
