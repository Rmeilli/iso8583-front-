import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Iso8583Service {
  private apiUrl = 'http://localhost:8080/api/iso85833';

  constructor(private http: HttpClient) { }

  processMessage(message: string): Observable<any> {
    return this.http.post(this.apiUrl, message, { responseType: 'text' });
  }

  generateReport(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/report`, { responseType: 'blob' });
}}
