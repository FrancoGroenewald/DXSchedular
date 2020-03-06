import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
import { ResourcesComponent } from './resources/resources.component';
import { PlainComponent } from './plain/plain.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { Service } from './app.service';
import { LocationComponent } from './location/location.component';
import { MethodsComponent } from './methods/methods.component';
import { FormComponent } from './form/form.component';
import { CustomComponent } from './custom/custom.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    PlainComponent,
    CalendarComponent,
    LocationComponent,
    MethodsComponent,
    FormComponent,
    CustomComponent
  ],
  imports: [
    DxSchedulerModule,
    DxTemplateModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
