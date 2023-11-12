import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me-header',
  templateUrl: './about-me-header.component.html',
  styleUrls: ['./about-me-header.component.scss']
})
export class AboutMeHeaderComponent {

  @Input() isMore = true
}
