import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
