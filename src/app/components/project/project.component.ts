import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  constructor(public viewContainerRef: ViewContainerRef){}
}
