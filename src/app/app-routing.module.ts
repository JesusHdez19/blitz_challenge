import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { ToDoListPageComponent } from './components/to-do-list-page/to-do-list-page.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'weather', component: WeatherPageComponent},
  { path: 'to_do_list', component: ToDoListPageComponent},
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
