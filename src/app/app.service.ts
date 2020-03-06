import { Injectable } from '@angular/core';

export class Appointment {
    text: string;
    startDate: Date;
    endDate: Date;
    allDay?: boolean;
}

export class Data {
    text: string;
    priorityId: number;
    typeId: number;
    startDate: Date;
    endDate: Date;
    recurrenceRule?: string;
}

export class PriorityData {
    text: string;
    id: number;
    color: string;
}

const appointments: Appointment[] = [
    {
        text: 'Website Re-Design Plan',
        startDate: new Date(2017, 4, 22, 9, 30),
        endDate: new Date(2017, 4, 22, 11, 30)
    }, {
        text: 'Book Flights to San Fran for Sales Trip',
        startDate: new Date(2017, 4, 22, 12, 0),
        endDate: new Date(2017, 4, 22, 13, 0),
        allDay: true
    }, {
        text: 'Install New Router in Dev Room',
        startDate: new Date(2017, 4, 22, 14, 30),
        endDate: new Date(2017, 4, 22, 15, 30)
    }, {
        text: 'Approve Personal Computer Upgrade Plan',
        startDate: new Date(2017, 4, 23, 10, 0),
        endDate: new Date(2017, 4, 23, 11, 0)
    }, {
        text: 'Final Budget Review',
        startDate: new Date(2017, 4, 23, 12, 0),
        endDate: new Date(2017, 4, 23, 13, 35)
    }, {
        text: 'New Brochures',
        startDate: new Date(2017, 4, 23, 14, 30),
        endDate: new Date(2017, 4, 23, 15, 45)
    }, {
        text: 'Install New Database',
        startDate: new Date(2017, 4, 24, 9, 45),
        endDate: new Date(2017, 4, 24, 11, 15)
    }, {
        text: 'Approve New Online Marketing Strategy',
        startDate: new Date(2017, 4, 24, 12, 0),
        endDate: new Date(2017, 4, 24, 14, 0)
    }, {
        text: 'Upgrade Personal Computers',
        startDate: new Date(2017, 4, 24, 15, 15),
        endDate: new Date(2017, 4, 24, 16, 30)
    }, {
        text: 'Customer Workshop',
        startDate: new Date(2017, 4, 25, 11, 0),
        endDate: new Date(2017, 4, 25, 12, 0),
        allDay: true
    }, {
        text: 'Prepare 2015 Marketing Plan',
        startDate: new Date(2017, 4, 25, 11, 0),
        endDate: new Date(2017, 4, 25, 13, 30)
    }, {
        text: 'Brochure Design Review',
        startDate: new Date(2017, 4, 25, 14, 0),
        endDate: new Date(2017, 4, 25, 15, 30)
    }, {
        text: 'Create Icons for Website',
        startDate: new Date(2017, 4, 26, 10, 0),
        endDate: new Date(2017, 4, 26, 11, 30)
    }, {
        text: 'Upgrade Server Hardware',
        startDate: new Date(2017, 4, 26, 14, 30),
        endDate: new Date(2017, 4, 26, 16, 0)
    }, {
        text: 'Submit New Website Design',
        startDate: new Date(2017, 4, 26, 16, 30),
        endDate: new Date(2017, 4, 26, 18, 0)
    }, {
        text: 'Launch New Website',
        startDate: new Date(2017, 4, 26, 12, 20),
        endDate: new Date(2017, 4, 26, 14, 0)
    }
];

const data: Data[] = [{
    text: 'Walking a dog',
    priorityId: 1,
    typeId: 1,
    startDate: new Date(2015, 4, 25, 8, 0),
    endDate: new Date(2015, 4, 25, 8, 30),
    recurrenceRule: 'FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20150530'
}, {
    text: 'Website Re-Design Plan',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 25, 9, 0),
    endDate: new Date(2015, 4, 25, 11, 30)
}, {
    text: 'Book Flights to San Fran for Sales Trip',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 25, 12, 0),
    endDate: new Date(2015, 4, 25, 13, 0)
}, {
    text: 'Install New Router in Dev Room',
    priorityId: 1,
    typeId: 2,
    startDate: new Date(2015, 4, 25, 14, 30),
    endDate: new Date(2015, 4, 25, 15, 30)
}, {
    text: 'Go Grocery Shopping',
    priorityId: 1,
    typeId: 1,
    startDate: new Date(2015, 4, 25, 18, 30),
    endDate: new Date(2015, 4, 25, 19, 30),
    recurrenceRule: 'FREQ=DAILY;BYDAY=MO,WE,FR;UNTIL=20150530'
}, {
    text: 'Approve Personal Computer Upgrade Plan',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 26, 10, 0),
    endDate: new Date(2015, 4, 26, 11, 0)
}, {
    text: 'Final Budget Review',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 26, 12, 0),
    endDate: new Date(2015, 4, 26, 13, 35)
}, {
    text: 'New Brochures',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 26, 14, 30),
    endDate: new Date(2015, 4, 26, 15, 45)
}, {
    text: 'Install New Database',
    priorityId: 1,
    typeId: 2,
    startDate: new Date(2015, 4, 27, 9, 45),
    endDate: new Date(2015, 4, 27, 11, 15)
}, {
    text: 'Approve New Online Marketing Strategy',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 27, 12, 0),
    endDate: new Date(2015, 4, 27, 14, 0)
}, {
    text: 'Upgrade Personal Computers',
    priorityId: 1,
    typeId: 2,
    startDate: new Date(2015, 4, 27, 15, 15),
    endDate: new Date(2015, 4, 27, 16, 30)
}, {
    text: 'Prepare 2015 Marketing Plan',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 28, 11, 0),
    endDate: new Date(2015, 4, 28, 13, 30)
}, {
    text: 'Brochure Design Review',
    priorityId: 1,
    typeId: 2,
    startDate: new Date(2015, 4, 28, 14, 0),
    endDate: new Date(2015, 4, 28, 15, 30)
}, {
    text: 'Create Icons for Website',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 29, 10, 0),
    endDate: new Date(2015, 4, 29, 11, 30)
}, {
    text: 'Upgrade Server Hardware',
    priorityId: 1,
    typeId: 2,
    startDate: new Date(2015, 4, 29, 14, 30),
    endDate: new Date(2015, 4, 29, 16, 0)
}, {
    text: 'Submit New Website Design',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 29, 16, 30),
    endDate: new Date(2015, 4, 29, 18, 0)
}, {
    text: 'Launch New Website',
    priorityId: 2,
    typeId: 2,
    startDate: new Date(2015, 4, 29, 12, 20),
    endDate: new Date(2015, 4, 29, 14, 0)
}, {
    text: 'Visiting a Doctor',
    priorityId: 2,
    typeId: 1,
    startDate: new Date(2015, 4, 30, 10, 0),
    endDate: new Date(2015, 4, 30, 13, 30)
}
];


const priorityData: PriorityData[] = [{
    text: 'Low Priority',
    id: 1,
    color: '#fcb65e'
}, {
    text: 'High Priority',
    id: 2,
    color: '#e18e92'
}
];

@Injectable()
export class Service {
    getAppointments(): Appointment[] {
        return appointments;
    }

    getPriorityData() {
        return priorityData;
    }

    getData() {
        return data;
    }
}
