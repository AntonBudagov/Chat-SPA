import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        pathMatch: 'full'
    },
    {
        path: 'chat',
        canActivate: [AuthGuard],
        loadChildren: './chat/chat.module#ChatModule'
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }