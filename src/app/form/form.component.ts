import { Component, OnInit } from '@angular/core';
import { Service, Appointment } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  appointmentsData: Appointment[];
  currentDate: Date = new Date(2017, 4, 25);

  constructor(service: Service) { 
    this.appointmentsData = service.getAppointments();
  }

  ngOnInit(): void {
  }

  onAppointmentFormOpening(event) {
    console.log(event);
  }
}
