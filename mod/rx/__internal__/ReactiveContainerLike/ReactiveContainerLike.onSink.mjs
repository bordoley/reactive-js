/// <reference types="./ReactiveContainerLike.onSink.d.ts" />
import { pipe, none, isSome, identity } from '../../../functions.mjs';
import DisposableLike__add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__onDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import ReactiveContainerLike__sinkInto from './ReactiveContainerLike.sinkInto.mjs';

const ReactiveContainerLike__onSink = (createReactiveContainer, src, f) => createReactiveContainer(sink => {
    pipe(src, ReactiveContainerLike__sinkInto(sink));
    const disposable = f() || none;
    pipe(sink, disposable instanceof Function
        ? DisposableLike__onDisposed(disposable)
        : isSome(disposable)
            ? DisposableLike__add(disposable)
            : identity);
});

export { ReactiveContainerLike__onSink as default };
