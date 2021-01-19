import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import {TaskModule} from 'src/app/components/task.module';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {InboxScreenComponent} from 'src/app/components/inbox-screen.component';
import {PureInboxScreenComponent} from 'src/app/components/pure-inbox-screen.component';

@NgModule({
  declarations: [AppComponent, InboxScreenComponent, PureInboxScreenComponent],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
