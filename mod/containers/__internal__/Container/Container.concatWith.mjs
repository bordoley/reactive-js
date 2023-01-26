/// <reference types="./Container.concatWith.d.ts" />
const Container$concatWith = ({ concat }, snd, ...tail) => first => concat(first, snd, ...tail);

export { Container$concatWith as default };
