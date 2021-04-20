import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { ClientComponent } from './component/client/client.component';
import { CategoryComponent } from './component/admin/category/category.component';
import { BookComponent } from './component/admin/book/book.component';
import { AuthorComponent } from './component/admin/author/author.component';
import { AddAuthorComponent } from './component/admin/author/add-author/add-author.component';
import { EditAuthorComponent } from './component/admin/author/edit-author/edit-author.component';
import { AddCategoryComponent } from './component/admin/category/add-category/add-category.component';
import { EditCategoryComponent } from './component/admin/category/edit-category/edit-category.component';
import { AddBookComponent } from './component/admin/book/add-book/add-book.component';
import { EditBookComponent } from './component/admin/book/edit-book/edit-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { FlashMessagesModule } from 'flash-messages-angular';
import { DetailComponent } from './component/client/detail/detail.component';
import { BookCateComponent } from './component/client/book-cate/book-cate.component';
import { ListComponent } from './component/client/list/list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    CategoryComponent,
    BookComponent,
    AuthorComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddBookComponent,
    EditBookComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    BookCateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    AngularEditorModule,
    FlashMessagesModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
