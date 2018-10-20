export class AppService {
    app: any;

    set(app: any) {
        this.app = app;
    }

    get() {
        return this.app;
    }
}