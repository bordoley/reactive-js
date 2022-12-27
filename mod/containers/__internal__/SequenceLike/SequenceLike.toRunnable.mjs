/// <reference types="./SequenceLike.toRunnable.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import create from '../../../rx/__internal__/RunnableLike/RunnableLike.create.mjs';

const toRunnable = () => (seq) => create(sink => {
    let result = seq();
    while (isSome(result)) {
        sink[SinkLike_notify](result[SequenceLike_data]);
        result = result[SequenceLike_next]();
    }
});

export { toRunnable as default };
