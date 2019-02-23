import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable()
export class PhotoService {
  constructor(private http: HttpClient) { }

  getPhotos(start: number = 1, limit: number = 12): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
  }
}
