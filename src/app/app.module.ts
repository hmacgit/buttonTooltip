import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartButtonDemoComponent } from './smart/smart-button-demo/smart-button-demo.component';
import { DumbButtonDemoComponent } from './dumb/dumb-button-demo/dumb-button-demo.component';
import { TooltipComponent } from './util/tooltip/tooltip.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from './directive/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartButtonDemoComponent,
    DumbButtonDemoComponent,
    TooltipComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
