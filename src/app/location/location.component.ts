import { Component, OnInit } from '@angular/core';
import { Service, Appointment } from '../app.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  appointmentsData: Appointment[];
  currentDate: Date = new Date(2017, 4, 25);

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
  }

  ngOnInit(): void {
  }

  onAppointmentFormOpening(event) {
    console.log(event);
    const form = event.form;
    const formItems = form.option('items');
    // form.option('items', [{
    //             label: {
    //               text: 'Location'
    //             },
    //             editorType: 'dxTextBox',
    //             dataField: 'location',
    //           }]
    //         );

    // formItems.push({
    //   label: { text: 'Location' },
    //   editorType: 'dxTextBox',
    //   dataField: 'location'
    // });

    if (!formItems.find(i => i.dataField === 'location')) {
      formItems.push({
        label: { text: 'Location' },
        editorType: 'dxTextBox',
        dataField: 'location'
      });
    }

    form.option('items', formItems);

    const popup = event.component.getAppointmentPopup();
    popup.option('title', 'Create Calendar Entry');

    form.option('items[1].editorOptions.displayFormat', 'yyyy-MM-dd, HH:mm');
    form.option('items[3].editorOptions.displayFormat', 'yyyy-MM-dd, HH:mm');

  }
}


