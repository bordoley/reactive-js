/// <reference types="./ContainerLike.zipWith.d.ts" />
const ContainerLike__zipWith = ({ zip }, snd, ...tail) => fst => zip(fst, snd, ...tail);

export { ContainerLike__zipWith as default };
