import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-section-header',
  templateUrl: './form-section-header.component.html',
  styleUrls: ['./form-section-header.component.css']
})
export class FormSectionHeaderComponent {
  @Input() sectionTitle : string
}
