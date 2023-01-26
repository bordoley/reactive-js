/// <reference types="./Sequence.toRunnable.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Runnable$create from '../../../rx/__internal__/Runnable/Runnable.create.mjs';

const Sequence$toRunnable = () => (seq) => Runnable$create(sink => {
    let result = seq();
    while (isSome(result)) {
        sink[SinkLike_notify](result[SequenceLike_data]);
        result = result[SequenceLike_next]();
    }
});

export { Sequence$toRunnable as default };
