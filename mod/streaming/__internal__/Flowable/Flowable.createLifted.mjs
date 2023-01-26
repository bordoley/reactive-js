/// <reference types="./Flowable.createLifted.d.ts" />
import { getLength, composeUnsafe, pipe } from '../../../functions.mjs';
import Dispatcher$dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Stream$create from '../Stream/Stream.create.mjs';
import Streamable$create from '../Streamable/Streamable.create.mjs';

const Flowable$createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return Streamable$create((scheduler, options) => {
        const stream = Stream$create(op, scheduler, options);
        return pipe(stream, Dispatcher$dispatch("pause"));
    });
};

export { Flowable$createLifted as default };
