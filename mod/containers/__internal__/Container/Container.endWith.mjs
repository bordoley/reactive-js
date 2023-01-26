/// <reference types="./Container.endWith.d.ts" />
import Container$concatWith from './Container.concatWith.mjs';

const Container$endWith = (m, ...values) => Container$concatWith(m, m.fromArray()(values));

export { Container$endWith as default };
