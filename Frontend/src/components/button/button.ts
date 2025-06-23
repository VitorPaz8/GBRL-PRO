import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() parameters!: {
    name: string;
    route?: string | any[]; // Pode ser string ou array
    action?: () => void;
    disabled?: boolean;
    class?: string;
    variant?: 'common' | 'navigation-bar-button' | 'danger';
  }
  
  handleClick() {
    if (!this.parameters.disabled && this.parameters.action) {
      this.parameters.action();
    }
  }
}
