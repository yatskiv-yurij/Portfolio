import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { SkillComponent } from './components/skill/skill.component';
import { AboutMeHeaderComponent } from './components/about-me-header/about-me-header.component';
import { ContactsHeaderComponent } from './components/contacts-header/contacts-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: ProjectsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    ProjectComponent,
    SkillComponent,
    AboutMeHeaderComponent,
    ContactsHeaderComponent,
    FooterComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
