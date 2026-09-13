import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import InvButton from '#/network/game/client/model/InvButton.js';

export default class InvButtonDecoder extends ClientGameMessageDecoder<InvButton> {
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
                slot = buf.g2_alt2();
                obj = buf.g2_alt3();
                com = buf.g2_alt1();
                break;
            case 2:
                slot = buf.g2_alt3();
                obj = buf.g2();
                com = buf.g2_alt1();
                break;
            case 3:
                com = buf.g2_alt2();
                slot = buf.g2_alt2();
                obj = buf.g2();
                break;
            case 4:
                slot = buf.g2();
                obj = buf.g2_alt2();
                com = buf.g2_alt2();
                break;
            case 5:
                obj = buf.g2_alt3();
                slot = buf.g2_alt1();
                com = buf.g2_alt3();
                break;
        }

        console.log(`InvButtonDecoder: op=${this.op}, obj=${obj}, slot=${slot}, com=${com}`);

        return new InvButton(this.op, obj, slot, com);
    }
}
