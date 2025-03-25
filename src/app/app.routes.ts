import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NewLeaveComponent } from './pages/new-leave/new-leave.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch: "full"
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'employee',
                component:EmployeeComponent
            },
            {
                path:'leave-request',
                component:NewLeaveComponent
            }
        ]
    }
];
