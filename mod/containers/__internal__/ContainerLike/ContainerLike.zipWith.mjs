/// <reference types="./ContainerLike.zipWith.d.ts" />
const zipWith = ({ zip }, snd, ...tail) => fst => zip(fst, snd, ...tail);

export { zipWith as default };
