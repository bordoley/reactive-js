/// <reference types="./Container.endWith.d.ts" />
import Container_concatWith from './Container.concatWith.mjs';

const Container_endWith = (m, ...values) => Container_concatWith(m, m.fromArray()(values));

export { Container_endWith as default };
