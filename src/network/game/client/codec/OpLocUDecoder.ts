import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import OpLocU from '#/network/game/client/model/OpLocU.js';

export default class OpLocUDecoder extends ClientGameMessageDecoder<OpLocU> {
    prot = ClientGameProt.OPLOCU;

    decode(buf: Packet) {
        const useObj = buf.g2_alt3();
        const loc = buf.g2_alt2();
        const useSlot = buf.g2();
        const x = buf.g2_alt1();
        const useCom = buf.g2_alt3();
        const z = buf.g2();
        return new OpLocU(x, z, loc, useObj, useSlot, useCom);
    }
}
