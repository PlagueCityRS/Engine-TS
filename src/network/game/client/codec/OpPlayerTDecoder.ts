import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpPlayerT from '#/network/game/client/model/OpPlayerT.js';

export default class OpPlayerTDecoder extends ClientGameMessageDecoder<OpPlayerT> {
    prot = ClientGameProt.OPPLAYERT;

    decode(buf: Packet) {
        const spellCom = buf.g2_alt2();
        const playerSlot = buf.g2();

        return new OpPlayerT(playerSlot, spellCom);
    }
}
