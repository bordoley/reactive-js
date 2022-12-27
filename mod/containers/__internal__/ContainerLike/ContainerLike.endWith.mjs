/// <reference types="./ContainerLike.endWith.d.ts" />
import concatWith from './ContainerLike.concatWith.mjs';

const endWith = (m, ...values) => concatWith(m, m.fromArray()(values));

export { endWith as default };
