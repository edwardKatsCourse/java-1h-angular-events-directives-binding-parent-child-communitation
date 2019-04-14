import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserInputComponent} from './users/user-input/user-input.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserInputComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
