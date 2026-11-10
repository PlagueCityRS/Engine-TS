import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpNpc from '#/network/game/client/model/OpNpc.js';

export default class OpNpcDecoder extends ClientGameMessageDecoder<OpNpc> {
    constructor(
        readonly prot: ClientGameProt,
        readonly op: number
    ) {
        super();
    }

    decode(buf: Packet) {
        let npcSlot = -1;

        switch (this.op) {
            case 1:
                npcSlot = buf.g2_alt2();
                break;
            case 2:
                npcSlot = buf.g2_alt3();
                break;
            case 3:
                npcSlot = buf.g2();
                break;
            case 4:
                npcSlot = buf.g2_alt2();
                break;
            case 5:
                npcSlot = buf.g2_alt1();
                break;
        }

        return new OpNpc(this.op, npcSlot);
    }
}
