import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>&copy; 2023 Don Serrano. All rights reserved.</p>
      <nav>
        <a href="/privacy-policy">Privacy Policy</a> |
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
    </footer>
  `,
})
export class FooterComponent {}
