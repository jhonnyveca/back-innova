"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAdapter = void 0;
const websockets_1 = require("@nestjs/websockets");
const WebSocket = __importStar(require("ws"));
class WsAdapter extends websockets_1.AbstractWsAdapter {
    constructor(appOrHttpServer) {
        super(appOrHttpServer);
    }
    create(port, options) {
        if (this.httpServer && port === 0) {
            const wsServer = new WebSocket.Server({ server: this.httpServer });
            return wsServer;
        }
        return new WebSocket.Server({ port, ...options });
    }
    bindMessageHandlers(client, handlers, process) {
        client.on('message', (message) => {
            for (const handler of handlers) {
                const result = process({ data: message });
                if (result) {
                    result.subscribe((response) => client.send(JSON.stringify(response)));
                }
            }
        });
    }
    async close(server) {
        server.close();
    }
}
exports.WsAdapter = WsAdapter;
//# sourceMappingURL=ws.adapter.js.map