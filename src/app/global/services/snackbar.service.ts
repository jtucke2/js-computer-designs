import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  public openSnackbar(message: string, panelClass?: string[], action: string = '', duration: number = 5000) {
    this.snackBar.open(message, action, { duration, panelClass });
  }
}
