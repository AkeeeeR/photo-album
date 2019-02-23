import { Component, OnInit } from '@angular/core';
import { Photo } from './models/photo.model';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  photos: Photo[];
  photo: Photo;
  page = 1;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getPhotos(this.page)
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
      });
  }

  loadNextPage() {
    this.page = this.page + 12;
    this.getPhotos();
  }

  loadPrevPage() {
    this.page = this.page - 12;
    this.getPhotos();
  }
}
