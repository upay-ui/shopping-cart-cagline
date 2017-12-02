
import { environment } from '../environments/environment';

export class Constants {

    public static readonly version: string = environment.version;

    // routes
    public static readonly routeRoot: string = '';
    public static readonly routeDashboard: string = 'dashboard';
    public static readonly routeLogin: string = 'login';
    public static readonly routeCart: string = 'cart';

}
