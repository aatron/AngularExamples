
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';  // Root module needs to inherit from this to run in browser

import { AppComponent}    from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

// Root module
export class AppModule { }
