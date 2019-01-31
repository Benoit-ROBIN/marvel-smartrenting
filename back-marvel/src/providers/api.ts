import { Injectable, HttpService } from '@nestjs/common';
import { Md5 } from 'md5-typescript';

@Injectable()
export class ApiService {
    config;
    privatekey: string = 'ded8fac1bec87ae7fc821e2e9d018db59351ba3e';
    publickey: string = 'e9c3bb40f6470c35c53d1ac6e33db61a';
    ts: number = new Date().getTime();

    constructor(private httpService: HttpService) {
        const hash = Md5.init(this.ts + this.privatekey + this.publickey);
        this.config = {
            params: {
                ts: this.ts,
                apikey: this.publickey,
                hash,
            },
        };
    }

    async get(url: string, params?) {
        if (params !== undefined) {
            this.config.params = Object.assign({}, this.config.params, params);
        }
        return await this.httpService.get(url, this.config).toPromise().then((res) => res.data);
    }

}
