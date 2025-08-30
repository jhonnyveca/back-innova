import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';

@WebSocketGateway({ path: '/api/v1/ws/updates' }) // 👈 ruta nativa
export class WebSectionSiteGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    afterInit() {
        console.log('✅ WebSocket Gateway inicializado con WS nativo');
    }

    handleConnection(client: WebSocket) {
        console.log('🟢 Cliente conectado');
        client.send('Bienvenido al WebSocket!');
    }

    handleDisconnect(client: WebSocket) {
        console.log('🔴 Cliente desconectado');
    }

    sendUpdate(data: any) {
        this.server.clients.forEach((client: WebSocket) => {
            if (client.readyState === client.OPEN) {
                client.send(JSON.stringify(data));
            }
        });
    }
}
