import Packet from '#/io/Packet.js';
import ClientGameMessageDecoder from '#/network/game/client/ClientGameMessageDecoder.js';
import ClientGameProt from '#/network/game/client/ClientGameProt.js';
import MoveClick from '#/network/game/client/model/MoveClick.js';

export default class MoveClickDecoder extends ClientGameMessageDecoder<MoveClick> {
    constructor(readonly prot: ClientGameProt) {
        super();
    }

    decode(buf: Packet, length: number) {
        const ctrlHeld: number = buf.g1_alt1();
        const startZ: number = buf.g2_alt1();

        const offset: number = this.prot === ClientGameProt.MOVE_MINIMAPCLICK ? 14 : 0;
        const waypoints: number = (length - offset - 5) >> 1;

        const deltas: { dx: number; dz: number }[] = [];
        for (let i: number = 0; i < waypoints; i++) {
            const dx: number = buf.g1b_alt1();
            const dz: number = buf.g1b_alt2();
            if (i < 24) {
                deltas.push({ dx, dz });
            }
        }

        const startX: number = buf.g2_alt1();

        const path: { x: number; z: number }[] = [{ x: startX, z: startZ }];
        for (const { dx, dz } of deltas) {
            path.push({ x: startX + dx, z: startZ + dz });
        }

        return new MoveClick(path, ctrlHeld, this.prot === ClientGameProt.MOVE_OPCLICK);
    }
}
