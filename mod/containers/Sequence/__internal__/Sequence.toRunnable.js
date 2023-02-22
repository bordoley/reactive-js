/// <reference types="./Sequence.toRunnable.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
import { isSome } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
const Sequence_toRunnable = () => (seq) => Runnable_create(sink => {
    let result = seq();
    while (isSome(result)) {
        sink[SinkLike_notify](result[SequenceLike_data]);
        result = result[SequenceLike_next]();
    }
});
export default Sequence_toRunnable;
