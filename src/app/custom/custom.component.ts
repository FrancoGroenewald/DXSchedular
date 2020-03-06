import { Component, OnInit } from '@angular/core';
import { Appointment, Service } from '../app.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  appointmentsData: Appointment[];
  currentDate: Date = new Date(2017, 4, 25);
  public province = [
    {text: 'Western Cape', id: 1},
    {text: 'Eastern Cape', id: 2},
    {text: 'Northern Cape', id: 3},
    {text: 'North West', id: 4},
    {text: 'Free State', id: 5},
    {text: 'Kwazulu Natal', id: 6},
    {text: 'Gauteng', id: 7},
    {text: 'Limpopo', id: 8},
    {text: 'Mpumlanga', id: 9},
];

public userCalendar = [
    {text: 'Staff', id: 1},
    {text: 'Learing', id: 2},
];

public assignedUsers = [
  {text: 'Bob', id: 1},
    {text: 'Joe', id: 2},
    {text: 'Susan', id: 3},
    {text: 'Dean', id: 4},
    {text: 'Frikkie', id: 5},
];

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
  }

  ngOnInit(): void {
  }

  onAppointmentFormOpening(event) {
    const that = this;
    const form = event.form;
    const popup = event.component.getAppointmentPopup();
    popup.option('title', 'Create Calendar Entry');
    form.option('items', [{
      label: {
        text: 'Calendar'
      },
      editorType: 'dxSelectBox',
      dataField: 'calendarID',
      fieldExpr: 'calendarID',
      validationRules: [{ type: 'required', message: 'Pick calendar' }],
      editorOptions: {
        items: that.userCalendar,
        displayExpr: 'text',
        valueExpr: 'id',
        searchEnabled: true,
      }
    }, {
      label: {
        text: 'Users'
      },
      editorType: 'dxTagBox',
      dataField: 'userID',
      fieldExpr: 'userID',
      validationRules: [{ type: 'required', message: 'Pick users' }],
      editorOptions: {
        items: that.assignedUsers,
        displayExpr: 'text',
        valueExpr: 'id',
        searchEnabled: true,
      }
    }, {
      label: {
        text: 'Province'
      },
      editorType: 'dxSelectBox',
      dataField: 'provID',
      fieldExpr: 'provID',
      validationRules: [{ type: 'required', message: 'Pick province' }],
      editorOptions: {
        items: that.province,
        displayExpr: 'text',
        valueExpr: 'id',
        searchEnabled: true,
        validationRules: [{ type: 'required' }]
      }
    }, {
      name: 'description',
      dataField: 'description',
      editorType: 'dxTextBox',
    }, {
      name: 'startDate',
      dataField: 'startDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime'
      }
    }, {
      name: 'endDate',
      dataField: 'endDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime',
      }
    }, {
      name: 'All Day',
      dataField: 'allDay',
      editorType: 'dxSwitch',
      value: 'false',
      editorOptions: {
        onValueChanged: function (e) {
          if (e.value === true) {
            form.getEditor('startDate')
              .option('value', new Date().setHours(0, 0, 0, 0));
            form.getEditor('endDate')
              .option('value', new Date().setHours(23, 59, 59, 999));
          } else {
            form.getEditor('startDate')
              .option('value', new Date());
            form.getEditor('endDate')
              .option('value', new Date());
          }
        }
      }
    }
    ]);
    form.option('items[1].editorOptions.displayFormat', 'yyyy-MM-dd, HH:mm');
    form.option('items[3].editorOptions.displayFormat', 'yyyy-MM-dd, HH:mm');
  }

}
