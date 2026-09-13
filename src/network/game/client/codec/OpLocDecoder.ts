import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpLoc from '#/network/game/client/model/OpLoc.js';

export default class OpLocDecoder extends ClientGameMessageDecoder<OpLoc> {
    constructor(
        readonly prot: ClientGameProt,
        readonly op: number
    ) {
        super();
    }

    decode(buf: Packet) {
        let x = -1;
        let z = -1;
        let loc = -1;

        switch (this.op) {
            case 1:
                z = buf.g2_alt1();
                loc = buf.g2_alt2();
                x = buf.g2_alt3();
                break;
            default:
                z = buf.g2_alt1();
                loc = buf.g2_alt2();
                x = buf.g2_alt3();
                throw new Error(`Unhandled op loc: ${this.op}`);
        }

        return new OpLoc(this.op, x, z, loc);
    }
}
