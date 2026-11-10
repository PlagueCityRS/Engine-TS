import Packet from '#/io/Packet.js';
import ServerGameMessageEncoder from '#/network/game/server/ServerGameMessageEncoder.js';
import ServerGameProt from '#/network/game/server/ServerGameProt.js';
import IfOpenFullscreen from '../model/IfOpenFullscreen.js';

export default class IfOpenFullscreenEncoder extends ServerGameMessageEncoder<IfOpenFullscreen> {
    prot = ServerGameProt.IF_OPENFULLSCREEN;

    encode(buf: Packet, message: IfOpenFullscreen): void {
        buf.p2(message.main);
        buf.p2_alt2(message.banner);
    }
}
