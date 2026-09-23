import ServerGameMessage from '#/network/game/server/ServerGameMessage.js';

export default class IfOpenFullscreen extends ServerGameMessage {
    constructor(
        readonly main: number,
        readonly banner: number
    ) {
        super();
    }
}
