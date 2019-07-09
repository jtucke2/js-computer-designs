import { LayoutComponent } from './layout/layout.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { CategoriesComponent } from './categories/categories.component';
import { ComponentsComponent } from './components/components.component';

export const adminRoutes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/admin/platforms',
                pathMatch: 'full',
            },
            {
                path: 'platforms',
                component: PlatformsComponent
            },
            {
                path: 'manufacturers',
                component: ManufacturersComponent
            },
            {
                path: 'components',
                component: ComponentsComponent
            },
        ]
    }
];
