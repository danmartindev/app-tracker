import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import { MaterialsModule } from './materials/materials.module';
import { TesterComponent } from './tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
