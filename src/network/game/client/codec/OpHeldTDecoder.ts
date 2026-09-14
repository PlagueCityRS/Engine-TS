import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpHeldT from '#/network/game/client/model/OpHeldT.js';

export default class OpHeldTDecoder extends ClientGameMessageDecoder<OpHeldT> {
    prot = ClientGameProt.OPHELDT;

    decode(buf: Packet) {
        const spellCom = buf.g2_alt3();
        const obj = buf.g2();
        const com = buf.g2_alt1();
        const slot = buf.g2_alt2();
        console.log(`OpHeldTDecoder: obj=${obj}, slot=${slot}, com=${com}, spellCom=${spellCom}`);

        return new OpHeldT(obj, slot, com, spellCom);
    }
}
