import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: '../home/home.module#HomePageModule'
    },
    {
      path: 'list',
      loadChildren: '../list/list.module#ListPageModule'
    },
    { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
    { path: 'mpChangePwd', loadChildren: '../mp-change-pwd/mp-change-pwd.module#MpChangePwdPageModule' },
    { path: 'addroute', loadChildren: '../addroute/addroute.module#AddroutePageModule' },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule],
    declarations: []
  })
  export class MemberRoutingModule {}
