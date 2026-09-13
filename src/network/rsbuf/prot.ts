export enum PlayerInfoProt {
    APPEARANCE = 0x20,
    ANIM = 0x1,
    FACE_ENTITY = 0x80,
    SAY = 0x8,
    DAMAGE = 0x200,
    FACE_COORD = 0x2,
    CHAT = 0x40,
    BIG = 0x4,
    SPOT_ANIM = 0x100,
    EXACT_MOVE = 0x400,
    DAMAGE2 = 0x10
}

export function playerInfoProtIndex(prot: PlayerInfoProt): number {
    switch (prot) {
        case PlayerInfoProt.APPEARANCE:
            return 0;
        case PlayerInfoProt.ANIM:
            return 1;
        case PlayerInfoProt.FACE_ENTITY:
            return 2;
        case PlayerInfoProt.SAY:
            return 3;
        case PlayerInfoProt.DAMAGE:
            return 4;
        case PlayerInfoProt.DAMAGE2:
            return 5;
        case PlayerInfoProt.FACE_COORD:
            return 6;
        case PlayerInfoProt.CHAT:
            return 7;
        case PlayerInfoProt.SPOT_ANIM:
            return 8;
        case PlayerInfoProt.BIG:
        case PlayerInfoProt.EXACT_MOVE:
            return 255;
    }
}

export enum NpcInfoProt {
    DAMAGE2 = 0x120, //  lie
    ANIM = 0x2,
    FACE_ENTITY = 0x4,
    SAY = 0x40,
    DAMAGE = 0x1,
    CHANGE_TYPE = 0x10,
    SPOT_ANIM = 0x8,
    FACE_COORD = 0x20
}

export function npcInfoProtIndex(prot: NpcInfoProt): number {
    switch (prot) {
        case NpcInfoProt.ANIM:
            return 0;
        case NpcInfoProt.FACE_ENTITY:
            return 1;
        case NpcInfoProt.SAY:
            return 2;
        case NpcInfoProt.DAMAGE:
            return 3;
        case NpcInfoProt.DAMAGE2:
            return 4;
        case NpcInfoProt.CHANGE_TYPE:
            return 5;
        case NpcInfoProt.SPOT_ANIM:
            return 6;
        case NpcInfoProt.FACE_COORD:
            return 7;
    }
}
