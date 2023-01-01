/// <reference types="./ContainerLike.concatWith.d.ts" />
const ContainerLike__concatWith = ({ concat }, snd, ...tail) => first => concat(first, snd, ...tail);

export { ContainerLike__concatWith as default };
