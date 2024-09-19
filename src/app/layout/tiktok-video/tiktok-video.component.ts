import { Component ,Input} from '@angular/core';

 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-tiktok-video',
  templateUrl: './tiktok-video.component.html',
  styleUrl: './tiktok-video.component.css'
})
export class TiktokVideoComponent {
  constructor(private sanitizer: DomSanitizer){}  
  @Input() videoId!: string; 
   tiktokUrl1:SafeResourceUrl='' 
  ngOnInit(): void { 
     this.tiktokUrl1=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.tiktok.com/embed/v2/${this.videoId}?autoplay=1&loop=1&controls=1`)
 
    }
 
 
 
}
 