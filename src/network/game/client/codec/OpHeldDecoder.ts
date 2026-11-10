import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpHeld from '#/network/game/client/model/OpHeld.js';

export default class OpHeldDecoder extends ClientGameMessageDecoder<OpHeld> {
    constructor(
        readonly prot: ClientGameProt,
        readonly op: number
    ) {
        super();
    }

    decode(buf: Packet) {
        let obj = -1;
        let slot = -1;
        let com = -1;

        switch (this.op) {
            case 1:
                slot = buf.g2_alt1();
                com = buf.g2_alt2();
                obj = buf.g2_alt3();
                break;
            case 2:
                slot = buf.g2_alt2();
                obj = buf.g2_alt2();
                com = buf.g2();
                break;
            case 3:
                com = buf.g2();
                slot = buf.g2();
                obj = buf.g2();
                break;
            case 4:
                com = buf.g2_alt2();
                obj = buf.g2_alt2();
                slot = buf.g2();
                break;
            case 5:
                com = buf.g2_alt1();
                slot = buf.g2_alt1();
                obj = buf.g2_alt3();
                break;
        }
        return new OpHeld(this.op, obj, slot, com);
    }
}
