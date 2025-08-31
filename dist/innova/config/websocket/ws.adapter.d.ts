import { INestApplicationContext } from '@nestjs/common';
import { AbstractWsAdapter } from '@nestjs/websockets';
import { MessageMappingProperties } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import * as WebSocket from 'ws';
import * as http from 'http';
export declare class WsAdapter extends AbstractWsAdapter {
    constructor(appOrHttpServer?: INestApplicationContext | http.Server);
    create(port: number, options?: any & {
        namespace?: string;
        server?: any;
    }): WebSocket.Server<typeof import("ws"), typeof http.IncomingMessage>;
    bindMessageHandlers(client: WebSocket, handlers: MessageMappingProperties[], process: (data: any) => Observable<any>): void;
    close(server: any): Promise<void>;
}
