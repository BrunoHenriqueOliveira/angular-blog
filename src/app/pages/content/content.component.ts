import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [
    RouterLink
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = "https://files.tecnoblog.net/wp-content/uploads/2025/01/nintendo-switch-2-capa-1060x596.jpg";
  contentTitle: string = "Minha Noticia";
  contentDescription: string = " lorem";
}
