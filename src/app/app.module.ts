import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import { MaterialsModule } from './materials/materials.module';
import { TesterComponent } from './tester/tester.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
