import Packet from '#/io/Packet.js';
import ServerGameMessageEncoder from '#/network/game/server/ServerGameMessageEncoder.js';
import ServerGameProt from '#/network/game/server/ServerGameProt.js';
import IfSetAnim from '#/network/game/server/model/IfSetAnim.js';

export default class IfSetAnimEncoder extends ServerGameMessageEncoder<IfSetAnim> {
    prot = ServerGameProt.IF_SETANIM;

    encode(buf: Packet, message: IfSetAnim): void {
        buf.p2_alt1(message.seq);
        buf.p2_alt1(message.component);
    }
}
