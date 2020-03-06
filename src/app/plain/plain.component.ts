import { Component, OnInit } from '@angular/core';
import { Appointment, Service } from '../app.service';


@Component({
  selector: 'app-plain',
  templateUrl: './plain.component.html',
  styleUrls: ['./plain.component.css']
})
export class PlainComponent implements OnInit {
  appointmentsData: Appointment[];
  currentDate: Date = new Date(2017, 4, 25);

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
  }

  ngOnInit(): void {
  }

}
