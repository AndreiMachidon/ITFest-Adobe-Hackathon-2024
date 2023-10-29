export class Receiver{
    name: string;
    email: string;
    password: string;
    phone: string;
    x: number;
    y: number;
    needs: Map<string, number>;

    constructor(data: any) {
        this.name = data.name || '';
        this.email = data.email || '';
        this.password = data.password || '';
        this.phone = data.phone || '';
        this.x = data.x || 0;
        this.y = data.y || 0;
        this.needs = data.needs ? new Map(Object.entries(data.needs)) : new Map();
    }
}