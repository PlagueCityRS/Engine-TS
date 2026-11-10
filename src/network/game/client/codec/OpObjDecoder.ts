import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpObj from '#/network/game/client/model/OpObj.js';

export default class OpObjDecoder extends ClientGameMessageDecoder<OpObj> {
    constructor(
        readonly prot: ClientGameProt,
        readonly op: number
    ) {
        super();
    }

    decode(buf: Packet) {
        let x = -1; //buf.g2();
        let z = -1; //buf.g2();
        let obj = -1; //buf.g2();

        switch (this.op) {
            case 1:
                obj = buf.g2();
                z = buf.g2_alt3();
                x = buf.g2();
                break;
            case 2:
                obj = buf.g2_alt2();
                z = buf.g2();
                x = buf.g2_alt3();
                break;
            case 3:
                z = buf.g2_alt3();
                obj = buf.g2_alt1();
                x = buf.g2_alt2();
                break;
            case 4:
                z = buf.g2_alt1();
                obj = buf.g2_alt2();
                x = buf.g2_alt1();
                break;
            case 5:
                obj = buf.g2();
                x = buf.g2();
                z = buf.g2_alt2();
                break;
        }
        return new OpObj(this.op, x, z, obj);
    }
}
