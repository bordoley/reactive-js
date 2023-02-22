/// <reference types="./Container.concatWith.d.ts" />

const Container_concatWith = (concat) => (snd, ...tail) => first => concat(first, snd, ...tail);
export default Container_concatWith;
