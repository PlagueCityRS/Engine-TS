import Packet from '#/io/Packet.js';
import ServerGameMessageEncoder from '#/network/game/server/ServerGameMessageEncoder.js';
import ServerGameProt from '#/network/game/server/ServerGameProt.js';
import IfSetModel from '#/network/game/server/model/IfSetModel.js';

export default class IfSetModelEncoder extends ServerGameMessageEncoder<IfSetModel> {
    prot = ServerGameProt.IF_SETMODEL;

    encode(buf: Packet, message: IfSetModel): void {
        buf.p2_alt2(message.model);
        buf.p2(message.component);
    }
}
