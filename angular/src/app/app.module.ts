import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudencrudComponent } from './core/component_need_it/api_component';
@NgModule({
  declarations: [AppComponent,StudencrudComponent],
  imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
