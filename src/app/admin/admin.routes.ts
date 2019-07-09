import { LayoutComponent } from './layout/layout.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { ComponentsComponent } from './components/components.component';
import { ReportsComponent } from './reports/reports.component';

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
            {
                path: 'reports',
                component: ReportsComponent
            },
        ]
    }
];
