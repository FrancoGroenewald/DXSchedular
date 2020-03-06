import { Component, OnInit } from '@angular/core';
import { Service, Appointment, PriorityData } from '../app.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  appointmentsData: Appointment[];
  priorityData: PriorityData[];
  currentDate: Date = new Date(2015, 4, 25);
  constructor(service: Service) {
    this.appointmentsData = service.getData();
    this.priorityData = service.getPriorityData();
    }

  ngOnInit(): void {
  }

}
