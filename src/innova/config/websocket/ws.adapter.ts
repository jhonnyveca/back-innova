import { INestApplicationContext } from '@nestjs/common';
import { AbstractWsAdapter } from '@nestjs/websockets';
import { MessageMappingProperties } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import * as WebSocket from 'ws';
import * as http from 'http';

export class WsAdapter extends AbstractWsAdapter {
    constructor(appOrHttpServer?: INestApplicationContext | http.Server) {
        super(appOrHttpServer);
    }

    create(port: number, options?: any & { namespace?: string; server?: any }) {
        if (this.httpServer && port === 0) {
            const wsServer = new WebSocket.Server({ server: this.httpServer });
            return wsServer;
        }
        return new WebSocket.Server({ port, ...options });
    }

    bindMessageHandlers(
        client: WebSocket,
        handlers: MessageMappingProperties[],
        process: (data: any) => Observable<any>,
    ) {
        client.on('message', (message: string) => {
            for (const handler of handlers) {
                const result = process({ data: message });
                if (result) {
                    result.subscribe((response) => client.send(JSON.stringify(response)));
                }
            }
        });
    }

    async close(server: any): Promise<void> {
        server.close();
    }
}
