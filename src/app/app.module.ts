import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';


 


import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { GenerateExamComponent } from './generate-exam/generate-exam.component';
import { TestComponent } from './test/test.component';
import { NewQuestionFormComponent } from './new-question-form/new-question-form.component';
import { OnlineExamsComponent } from './online-exams/online-exams.component';
import { LiveExamComponent } from './live-exam/live-exam.component';
import { StudyYearsExamsComponent } from './study-years-exams/study-years-exams.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Questions', component: QuestionsComponent },
  { path: 'Home', component: HomeComponent },
  {path:"GenerateExam", component:GenerateExamComponent },
  {path:"Test", component:TestComponent },
  {path:"NewQuestionForm", component:NewQuestionFormComponent },
  {path:"OnlineExams", component:OnlineExamsComponent }, 
  {path:"LiveExam", component:LiveExamComponent },
  {path:"StudyYearsExams", component:StudyYearsExamsComponent }

 ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    QuestionsComponent,
    HomeComponent,
    GenerateExamComponent,
    TestComponent,
    NewQuestionFormComponent,
    OnlineExamsComponent,
    LiveExamComponent,
    StudyYearsExamsComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    TooltipModule.forRoot()

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
