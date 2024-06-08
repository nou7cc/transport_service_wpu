import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AllUsers } from './components/admin/all_users/user.component';
import { resrveationComponent } from './components/admin/all_reservations/reserve.component';

@NgModule({
  declarations:
          [
            AppComponent,
            AllUsers,
            resrveationComponent,
            ],
  imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
