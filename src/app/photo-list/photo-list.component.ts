import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.scss']
})
export class PhotoListComponent {
  @Input() photos: Photo[];
  @Input() page: number;
  @Output() returnPhoto = new EventEmitter<Photo>();
  @Output() showNextPage = new EventEmitter();
  @Output() showPrevPage = new EventEmitter();

  showPhoto(photo: Photo) {
    this.returnPhoto.emit(photo);
  }

  nextPage() {
    this.showNextPage.emit();
  }

  prevPage() {
    this.showPrevPage.emit();
  }
}
