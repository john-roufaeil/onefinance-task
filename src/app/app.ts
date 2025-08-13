import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterBarComponent } from './components/filterbar/filter-bar.component';
import { UserTableComponent } from './components/usertable/user-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    FilterBarComponent,
    UserTableComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  allUsers = [
    {
      name: 'أحمد إبراهيم',
      status: 'accepted',
      work: 'تشطيبات منازل',
      nid: '01223676324',
      phone: '01223676324',
    },
    {
      name: 'أحمد مصطفى',
      status: 'accepted',
      work: 'سيارات',
      nid: '01223676324',
      phone: '01223676324',
    },
    {
      name: 'محمد خالد',
      status: 'rejected',
      work: 'التعليم',
      nid: '01223676324',
      phone: '01223676324',
    },
  ];
  filteredUsers = [...this.allUsers];

  filterById(id: string) {
    this.filteredUsers = this.allUsers.filter((user) => user.nid.includes(id));
  }
}
