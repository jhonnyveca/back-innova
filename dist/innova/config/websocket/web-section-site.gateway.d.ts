import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';
export declare class WebSectionSiteGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    afterInit(): void;
    handleConnection(client: WebSocket): void;
    handleDisconnect(client: WebSocket): void;
    sendUpdate(data: any): void;
}
