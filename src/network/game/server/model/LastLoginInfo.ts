import ServerGameMessage from '#/network/game/server/ServerGameMessage.js';

export default class LastLoginInfo extends ServerGameMessage {
    constructor(
        readonly lastLoginIp: number,
        readonly previousLoginDay: number,
        readonly currentDay: number,
        readonly unreadMessageCount: number,
        readonly contactDetailsStatus: number,
        readonly passwordChangedDay: number,
        readonly contactDetailsSetDay: number,
        readonly membersCreditDays: number,
        readonly recoveriesSetDay: number
    ) {
        super();
    }
}
