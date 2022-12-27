/// <reference types="./ContainerLike.concatWith.d.ts" />
const concatWith = ({ concat }, snd, ...tail) => first => concat(first, snd, ...tail);

export { concatWith as default };
