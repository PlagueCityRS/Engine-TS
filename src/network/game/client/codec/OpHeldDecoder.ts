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
        let obj = -1; //buf.g2();
        let slot = -1; //buf.g2();
        let com = -1; //buf.g2();

        switch (this.op) {
            case 1:
                slot = buf.g2_alt1();
                com = buf.g2_alt2();
                obj = buf.g2_alt3();
                break;
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                throw new Error(`Unhandled op held: ${this.op}`);
        }

        console.log(`OpHeldDecoder: op=${this.op}, obj=${obj}, slot=${slot}, com=${com}`);

        return new OpHeld(this.op, obj, slot, com);
    }
}
