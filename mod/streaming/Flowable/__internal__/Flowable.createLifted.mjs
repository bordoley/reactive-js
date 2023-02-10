/// <reference types="./Flowable.createLifted.d.ts" />
import { getLength, composeUnsafe, pipe } from '../../../functions.mjs';
import Dispatcher_dispatch from '../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.mjs';
import { FlowMode_pause } from '../../../streaming.mjs';
import Stream_create from '../../Stream/__internal__/Stream.create.mjs';
import Streamable_create from '../../Streamable/__internal__/Streamable.create.mjs';

const Flowable_createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return Streamable_create((scheduler, options) => {
        const stream = Stream_create(op, scheduler, options);
        return pipe(stream, Dispatcher_dispatch(FlowMode_pause));
    });
};

export { Flowable_createLifted as default };
