/// <reference types="./Container.zipWith.d.ts" />
const Container_zipWith = ({ zip }, snd, ...tail) => fst => zip(fst, snd, ...tail);

export { Container_zipWith as default };
