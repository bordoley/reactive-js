/// <reference types="./Container.zipWith.d.ts" />

const Container_zipWith = (zip) => (snd, ...tail) => fst => zip(fst, snd, ...tail);
export default Container_zipWith;
