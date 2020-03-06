import { Component, OnInit } from '@angular/core';
import { Appointment, Service } from '../app.service';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {
  appointmentsData: Appointment[];
  currentDate: Date = new Date(2017, 4, 25);
  public display: any;
  public displayForm: any;
  public showAd = false;
  public showUp = false;
  public showDe = false;
  public showFo = false;

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
    }

  ngOnInit(): void {
  }

  onAppointmentAdded(event) {
    this.showAd = true;
    this.display = event;
  }
  onAppointmentUpdating(event) {
    this.showAd = false;
    this.showUp = true;
    this.display = event;
  }
  onAppointmentDeleted(event) {
    this.showAd = false;
    this.showDe = true;
    this.display = event;
  }
}
