import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AvatarModuleModule } from './avatar-module/avatar-module.module';
import { CustomizeComponent } from './components/avatar/customize/customize.component';
import { ButtonColorComponent } from './components/avatar/button-color/button-color.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomizeComponent,
    ButtonColorComponent,
  
  ],
  imports: [
   BrowserModule,
   AvatarModuleModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
