/// <reference types="./RunnableLike.defer.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import RunnableLike__create from './RunnableLike.create.mjs';

const RunnableLike__defer = f => RunnableLike__create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});

export { RunnableLike__defer as default };
