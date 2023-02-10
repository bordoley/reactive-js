/// <reference types="./Streamable.createLifted.d.ts" />
import { getLength, composeUnsafe } from '../../../functions.mjs';
import Stream_create from '../../Stream/__internal__/Stream.create.mjs';
import Streamable_create from './Streamable.create.mjs';

const Streamable_createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return Streamable_create((scheduler, options) => Stream_create(op, scheduler, options));
};

export { Streamable_createLifted as default };
