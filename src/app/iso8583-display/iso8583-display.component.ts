import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Iso8583Service } from '../iso8583.service';

interface BitmapInfo {
  bitNumber: number;
  description: string;
  value: string;
}

interface ProcessedMessage {
  mti: string;
  mtiInfo: {
    messagePurpose: string;
    from: string;
    to: string;
    usage: string;
  };
  fields: { [key: string]: string };
  bitmapInfo: BitmapInfo[];
  creationDate: string;
}


@Component({
  selector: 'app-iso8583-display',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iso8583-display.component.html',
  styleUrls: ['./iso8583-display.component.css']
})
export class Iso8583DisplayComponent {
  inputMessage: string = '';
  processedMessage: ProcessedMessage | null = null;

  constructor(private iso8583Service: Iso8583Service) {
  }

  processMessage() {
    this.iso8583Service.processMessage(this.inputMessage).subscribe(
      (response) => {
        this.processedMessage = JSON.parse(response);
        console.log('Processed Message:', this.processedMessage);
      },
      (error) => {
        console.error('Error processing message:', error);
      }
    );
  }

  getFields() {
    if (this.processedMessage && this.processedMessage.fields) {
      return Object.entries(this.processedMessage.fields).map(([key, value]) => ({key, value}));
    }
    return [];
  }

  getBitmapDescription(bitNumber: string): string {
    if (!this.processedMessage || !this.processedMessage.bitmapInfo) {
      return 'Unknown';
    }
    const bitmapInfo = this.processedMessage.bitmapInfo.find(info => info.bitNumber === parseInt(bitNumber));
    return bitmapInfo ? bitmapInfo.description : 'Unknown';
  }

  getAllBits() {
    if (this.processedMessage && this.processedMessage.bitmapInfo) {
      return this.processedMessage.bitmapInfo;
    }
    return [];
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }
  generateReport() {
    this.iso8583Service.generateReport().subscribe(
      (response: Blob) => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      },
      error => {
        console.error('Error generating report:', error);
      }
    );
  }
}
