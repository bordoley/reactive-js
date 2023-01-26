/// <reference types="./Streamable.createLifted.d.ts" />
import { getLength, composeUnsafe } from '../../../functions.mjs';
import Stream$create from '../Stream/Stream.create.mjs';
import Streamable$create from './Streamable.create.mjs';

const Streamable$createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return Streamable$create((scheduler, options) => Stream$create(op, scheduler, options));
};

export { Streamable$createLifted as default };
