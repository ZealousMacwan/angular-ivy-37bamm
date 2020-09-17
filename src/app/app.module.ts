import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GreeterComponent } from './components/greeter/greeter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  //Component should be part of any module so added in declaration
  declarations: [ AppComponent, HelloComponent, GreeterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
