import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlainComponent } from './plain/plain.component';
import { ResourcesComponent } from './resources/resources.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LocationComponent } from './location/location.component';
import { MethodsComponent } from './methods/methods.component';
import { FormComponent } from './form/form.component';
import { CustomComponent } from './custom/custom.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/plain', pathMatch: 'full' },
    { path: 'plain', component: PlainComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'methods', component: MethodsComponent },
    { path: 'forms', component: FormComponent },
    { path: 'location', component: LocationComponent },
    { path: 'custom', component: CustomComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
