import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsService } from './services/items.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './components/items/items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ItemsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [ItemsService]
})
export class App {
  protected readonly title = signal('frontend');
}

