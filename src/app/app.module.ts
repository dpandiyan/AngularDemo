import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

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
import { ServicesComponent } from './ServicesDemo/services/services.component';
import { Child1Component } from './ServicesDemo/child1/child1.component';
import { Child2Component } from './ServicesDemo/child2/child2.component';
import { Child3Component } from './ServicesDemo/child3/child3.component';
import { NoTestComponent } from './NoSpecDemo/no-test/no-test.component';
import { TemplateFormsComponent } from './FormsDemo/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './FormsDemo/reactive-forms/reactive-forms.component';


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
    FamilyComponent,
    ServicesComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    NoTestComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
        path: 'Services',
component: ServicesComponent,
children:[
  {
    path: 'Child1',
    component: Child1Component
  },
  {
   path: 'Child2',
   component: Child2Component
 }
]
      },
      {
        path: 'Templates',
   component: TemplateFormsComponent
      },
      {
        path: 'Reactive',
   component: ReactiveFormsComponent
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
