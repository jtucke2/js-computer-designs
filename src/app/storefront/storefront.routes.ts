import { CompareComponent } from './compare/compare.component';
import { CustomizeComponent } from './customize/customize.component';

export const storeFrontRoutes = [
    {
        path: 'compare',
        component: CompareComponent
    },
    {
        path: 'customize/:id',
        component: CustomizeComponent
    },
];
