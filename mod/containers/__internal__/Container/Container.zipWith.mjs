/// <reference types="./Container.zipWith.d.ts" />
const Container$zipWith = ({ zip }, snd, ...tail) => fst => zip(fst, snd, ...tail);

export { Container$zipWith as default };
