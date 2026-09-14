import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpHeldU from '#/network/game/client/model/OpHeldU.js';

export default class OpHeldUDecoder extends ClientGameMessageDecoder<OpHeldU> {
    prot = ClientGameProt.OPHELDU;

    decode(buf: Packet) {
        const useCom = buf.g2_alt1();
        const com = buf.g2();
        const useObj = buf.g2_alt1();
        const useSlot = buf.g2_alt2();
        const slot = buf.g2_alt2();
        const obj = buf.g2_alt1();

        return new OpHeldU(obj, slot, com, useObj, useSlot, useCom);
    }
}
