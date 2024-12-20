import { Component, input } from '@angular/core';
import { Page } from '../../models/page.type';
import { RouterLink } from '@angular/router';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CapitalizePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = input.required<string>();
  pages = input.required<Page[]>();
}