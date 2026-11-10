import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpPlayer from '#/network/game/client/model/OpPlayer.js';

export default class OpPlayerDecoder extends ClientGameMessageDecoder<OpPlayer> {
    constructor(
        readonly prot: ClientGameProt,
        readonly op: number
    ) {
        super();
    }

    decode(buf: Packet) {
        let playerSlot = -1;

        switch (this.op) {
            case 1:
                playerSlot = buf.g2_alt3();
                break;
            case 2:
                playerSlot = buf.g2_alt2();
                break;
            case 3:
                playerSlot = buf.g2_alt1();
                break;
            case 4:
                playerSlot = buf.g2();
                break;
            case 5:
                playerSlot = buf.g2();
                break;
        }
        return new OpPlayer(this.op, playerSlot);
    }
}
