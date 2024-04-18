import { Component, Inject } from '@angular/core';
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
    eventClick: (arg) => this.handleEventClick(arg),
    events: []
  };

  constructor(public dialog: MatDialog){
    this.newEvents = []
  }

  // Eliminar evento
  handleEventClick(arg: any){
    const title = arg.event._def.title;
    
    let configs;
    configs = {
      width: 'auto',
      height: 'auto', 
      data: { title: title }  
    };

    const dialogRef = this.dialog.open(DeleteEventDialogComponent, configs);

    dialogRef.afterClosed().subscribe(result => {
      if(result.event === 1){
        for (var i = 0; i < this.newEvents.length; i++) {
          if (this.newEvents[i].title == title) {
            this.newEvents.splice(i, 1);
            this.calendarOptions.events=[];
            break;
          }
        }
        this.calendarOptions.events = [...this.newEvents];
      }
    });
  }

  // Agregar evento
  handleDateClick(date: { dateStr: string; }) {
    let configs;
    configs = {
      width: 'auto',
      height: 'auto', 
      data: {  }
      
    };
    const dialogRef = this.dialog.open(AddEventDialogComponent, configs);

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
export class AddEventDialogComponent {

  title: string = ''

  constructor(public dialogRef: MatDialogRef<AddEventDialogComponent>){

  }

  confirm(){
    this.dialogRef.close({event: 1, title: this.title})
  }
  
  close(){
    this.dialogRef.close({event: 0})
  }
}

@Component({
  selector: 'delete-event',
  standalone: true,
  templateUrl: '../../modals/delete-event.component.html',
  styleUrls: ['../../modals/add-event.component.css'],
  imports: [FormsModule]
})
export class DeleteEventDialogComponent {

  title: string = ''

  constructor(public dialogRef: MatDialogRef<DeleteEventDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.title = data.title 
  }

  confirm(){
    this.dialogRef.close({event: 1, title: this.title})
  }
  
  close(){
    this.dialogRef.close({event: 0})
  }
}
