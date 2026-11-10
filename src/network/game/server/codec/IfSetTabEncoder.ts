import Packet from '#/io/Packet.js';
import ServerGameMessageEncoder from '#/network/game/server/ServerGameMessageEncoder.js';
import ServerGameProt from '#/network/game/server/ServerGameProt.js';
import IfSetTab from '#/network/game/server/model/IfSetTab.js';

export default class IfSetTabEncoder extends ServerGameMessageEncoder<IfSetTab> {
    prot = ServerGameProt.IF_SETTAB;

    encode(buf: Packet, message: IfSetTab): void {
        buf.p1_alt1(message.tab);
        buf.p2(message.component);
    }
}
