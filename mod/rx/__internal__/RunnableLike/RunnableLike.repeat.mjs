/// <reference types="./RunnableLike.repeat.d.ts" />
import ContainerLike__repeat from '../../../containers/__internal__/ContainerLike/ContainerLike.repeat.mjs';
import { pipe } from '../../../functions.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DelegateSinkLike__create from '../DelegatingSinkLike/DelegatingSinkLike.create.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import RunnableLike__create from './RunnableLike.create.mjs';

const RunnableLike__repeat = /*@__PURE__*/ (() => {
    return ContainerLike__repeat((delegate, predicate) => RunnableLike__create(sink => {
        let count = 0;
        do {
            pipe(DelegateSinkLike__create(sink), DisposableLike__addTo(sink), SinkLike__sourceFrom(delegate), DisposableLike__dispose());
            count++;
        } while (!DisposableLike__isDisposed(sink) && predicate(count));
    }));
})();

export { RunnableLike__repeat as default };
