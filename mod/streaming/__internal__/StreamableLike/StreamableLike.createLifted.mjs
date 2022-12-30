/// <reference types="./StreamableLike.createLifted.d.ts" />
import { getLength, composeUnsafe } from '../../../functions.mjs';
import { T as create$1 } from '../../../ObservableLike-ca8b1474.mjs';
import create from './StreamableLike.create.mjs';

const createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return create((scheduler, options) => create$1(op, scheduler, options));
};

export { createLifted as default };
