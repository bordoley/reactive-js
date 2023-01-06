/// <reference types="./RunnableLike.generate.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import RunnableLike__create from './RunnableLike.create.mjs';

const RunnableLike__generate = (generator, initialValue) => RunnableLike__create((sink) => {
    let acc = initialValue();
    while (!DisposableLike__isDisposed(sink)) {
        acc = generator(acc);
        sink[SinkLike_notify](acc);
    }
});

export { RunnableLike__generate as default };
