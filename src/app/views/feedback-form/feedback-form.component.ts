import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {
  constructor(private router: Router) {}

  isCommentsPage(): boolean {
    return this.router.url === '/comments';
  }
}
