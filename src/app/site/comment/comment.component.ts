import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RemarkService } from './../../core/remark/remark.service';
import { Remark } from '../../core/remark/remark';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  listOf: Remark[] = null;

  commentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private remarkService: RemarkService
  ) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      text: ['', [Validators.required]]
    });

    this.remarkService.get()
      .subscribe(data => {
        this.listOf = data;
      });
  }

  sendForm() {
    const title = this.commentForm.get('title').value;
    const text = this.commentForm.get('text').value;
    this.remarkService.post({title, text, id: 0})
      .subscribe((data) => {
        this.listOf.push(data);
        this.commentForm.reset();
      });
  }

}
