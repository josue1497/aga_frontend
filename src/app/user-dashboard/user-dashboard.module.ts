import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { UtopbarComponent } from './utopbar/utopbar.component';
import { UsidebarComponent } from './usidebar/usidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { HistoryComponent } from './history/history.component';
import { PaymentAppointmentComponent } from './payment-appointment/payment-appointment.component';
import { BalanceComponent } from './balance/balance.component';
import { TansactionsComponent } from './tansactions/tansactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [UDashboardComponent, UtopbarComponent, UsidebarComponent, ProfileComponent, NewAppointmentComponent, HistoryComponent, PaymentAppointmentComponent, BalanceComponent, TansactionsComponent, DashboardComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    NgbModule
  ]
})
export class UserDashboardModule { }
