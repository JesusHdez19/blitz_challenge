import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import { FormsModule } from "@angular/forms";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from "@fullcalendar/core/locales/es";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  newEvents: any

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    locale: esLocale,
    dateClick: (arg) => this.handleDateClick(arg),
    // header: {},
    events: []
  };

  constructor(public dialog: MatDialog){
    this.newEvents = []
  }

  handleDateClick(date: { dateStr: string; }) {
    let configs;
    configs = {
      width: 'auto',
      height: 'auto', 
      data: {  }
      
    };
    const dialogRef = this.dialog.open(AddEventComponent, configs);

    dialogRef.afterClosed().subscribe(result => {
      if(result.event === 1){
        this.addEvent(result.title,date.dateStr)
      }
    });
  }

  addEvent(title: string, date: string){
    let newEvent = {
      title: title, date: date
    };
    this.newEvents.push(newEvent);
    this.calendarOptions.events = [...this.newEvents]
  }
}

@Component({
  selector: 'add-event',
  standalone: true,
  templateUrl: '../../modals/add-event.component.html',
  styleUrls: ['../../modals/add-event.component.css'],
  imports: [FormsModule]
})
export class AddEventComponent {

  title: string = ''

  constructor(public dialogRef: MatDialogRef<AddEventComponent>){

  }

  confirm(){
    this.dialogRef.close({event: 1, title: this.title})
  }
  
  close(){
    this.dialogRef.close({event: 0})
  }
}
