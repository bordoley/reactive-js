/// <reference types="./ContainerLike.endWith.d.ts" />
import ContainerLike__concatWith from './ContainerLike.concatWith.mjs';

const ContainerLike__endWith = (m, ...values) => ContainerLike__concatWith(m, m.fromArray()(values));

export { ContainerLike__endWith as default };
