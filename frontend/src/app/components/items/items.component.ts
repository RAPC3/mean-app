import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items.html',
  styleUrls: ['./items.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  newItem = '';

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.itemsService.getItems().subscribe(data => this.items = data);
  }

  addItem() {
    if (!this.newItem.trim()) return;
    this.itemsService.addItem(this.newItem).subscribe(item => {
      this.items.push(item);
      this.newItem = '';
    });
  }
}

