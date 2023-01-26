import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TopBarComponent],
  bootstrap: [AppComponent, TopBarComponent],
})
export class AppModule {}
