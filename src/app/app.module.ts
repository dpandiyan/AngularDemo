import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './Family/members/members.component';
import { FatherComponent } from './Family/father/father.component';
import { ReviewComponent } from './Assignment/AllComponents/review/review.component';
import { ThumbNailComponent } from './Assignment/AllComponents/thumb-nail/thumb-nail.component';
import { DescriptionComponent } from './Assignment/AllComponents/description/description.component';
import { DirectiveComponent } from './DirectivesSample/directive/directive.component';
import { PipesComponent } from './PipeSample/pipes/pipes.component';
import { BadRouteComponent } from './bad-route/bad-route.component';
import { FamilyComponent } from './Family/family/family.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    FatherComponent,
    ReviewComponent,
    ThumbNailComponent,
    DescriptionComponent,
    DirectiveComponent,
    PipesComponent,
    BadRouteComponent,
    FamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      
      {        
        path: 'Family',
               component: FamilyComponent,
               children:[
                 {
                   path: 'Father',
                   component: FatherComponent
                 },
                 {
                  path: 'Members',
                  component: MembersComponent
                }
               ]
      },
      {
        path: 'Review',
        component: ReviewComponent
      },
      {
        path: 'Pipes',
        component: PipesComponent
      },
      {
        path: 'Directives',
        component: DirectiveComponent
      },{
        path:'',
        redirectTo: 'Review',
        pathMatch: 'full'        
      },
      {
        path: '**',
        component: BadRouteComponent
      }
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
