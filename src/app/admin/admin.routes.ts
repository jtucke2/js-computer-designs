import { LayoutComponent } from './layout/layout.component';
import { PlatformsComponent } from './platforms/platforms.component';

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
            }
        ]
    }
];
