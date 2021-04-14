import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AddAuthorComponent } from './component/admin/author/add-author/add-author.component';
import { AuthorComponent } from './component/admin/author/author.component';
import { EditAuthorComponent } from './component/admin/author/edit-author/edit-author.component';
import { AddBookComponent } from './component/admin/book/add-book/add-book.component';
import { BookComponent } from './component/admin/book/book.component';
import { EditBookComponent } from './component/admin/book/edit-book/edit-book.component';
import { AddCategoryComponent } from './component/admin/category/add-category/add-category.component';
import { CategoryComponent } from './component/admin/category/category.component';
import { EditCategoryComponent } from './component/admin/category/edit-category/edit-category.component';
import { BookCateComponent } from './component/client/book-cate/book-cate.component';
import { ClientComponent } from './component/client/client.component';
import { DetailComponent } from './component/client/detail/detail.component';
import { ListComponent } from './component/client/list/list.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'book',
        component: BookComponent
      },
      {
        path: 'book/add',
        component: AddBookComponent
      },
      {
        path: 'book/edit/:id',
        component: EditBookComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      }, 
      {
        path: 'category/add',
        component: AddCategoryComponent
      },
      {
        path: 'category/edit/:id',
        component: EditCategoryComponent
      },
      {
        path: 'author',
        component: AuthorComponent
      },
      {
        path: 'author/add',
        component: AddAuthorComponent
      },
      {
        path: 'author/edit/:id',
        component: EditAuthorComponent
      }
    ]
  },
  {
    path: '',
    component: ClientComponent, 
    children: [
      {
        path: 'category/:cateId',
        component: BookCateComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
      {
        path: '',
        component: ListComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
