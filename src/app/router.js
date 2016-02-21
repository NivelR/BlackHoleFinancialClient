import { HomeComponent } from './components/home/home';
import { ListComponent } from './components/post/list';
import { NewComponent } from './components/post/new';
import { EditComponent } from './components/post/edit';
import { AboutComponent } from './components/about/about';
import { LoginComponent } from './components/login/login';

export const router = {
  config: [
    { path: '/', component: HomeComponent, name: 'Home', useAsDefault: true },
    { path: '/new', component: NewComponent, name: 'New' },
    { path: '/edit/:id', component: EditComponent, name: 'Edit' },
    { path: '/about', component: AboutComponent, name: 'About' },
    { path: '/login', component: LoginComponent, name: 'Login' }
  ]
};
