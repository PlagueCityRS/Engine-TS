import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import MessagePublic from '#/network/game/client/model/MessagePublic.js';

export default class MessagePublicDecoder extends ClientGameMessageDecoder<MessagePublic> {
    prot = ClientGameProt.MESSAGE_PUBLIC;

    decode(buf: Packet, length: number) {
        const input = new Uint8Array(length);
        buf.gdata_alt2(input, buf.pos, length - 2);

        const effect = buf.g1_alt3();
        const color = buf.g1();

        return new MessagePublic(input, color, effect);
    }
}
