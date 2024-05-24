import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';

import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';

import {MatRadioModule} from '@angular/material/radio';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface ExampleTab {
  label: string;
  content: string;
}

@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatCardModule,MatDividerModule, MatListModule, MatExpansionModule, MatButtonModule, MatTabsModule, AsyncPipe, MatIconModule, MatIcon, MatCheckboxModule, FormsModule, MatRadioModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  value = 'Clear me';

}