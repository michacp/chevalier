import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecaptchaService } from '../../service/recaptcha/recaptcha.service';
@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {
  constructor(private router: Router,private recaptchaService: RecaptchaService) {}
  comments: string = 'asd';
  isCommentsPage(): boolean {
    return this.router.url === '/comments';
  }

  async onSubmit() {
    try {
      // Ejecuta el reCAPTCHA y obtén el token
      const token = await this.recaptchaService.executeRecaptcha('submit');
      
      // Envía los comentarios junto con el token reCAPTCHA
      const feedbackData = {
        comments: this.comments,
        recaptchaToken: token
      };
      
      const response = await this.recaptchaService.sendFeedback(feedbackData);
      console.log('Feedback submitted successfully', response);
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  }
}
