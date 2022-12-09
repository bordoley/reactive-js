/// <reference types="./ReactiveContainerLike.createOnSink.d.ts" />
import { pipe, none, isSome, identity } from '../../functions.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { add } from '../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import { onDisposed } from '../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';

const createOnSink = (createReactiveContainer, src, f) => createReactiveContainer(sink => {
    pipe(src, sinkInto(sink));
    const disposable = f() || none;
    pipe(sink, disposable instanceof Function
        ? onDisposed(disposable)
        : isSome(disposable)
            ? add(disposable)
            : identity);
});

export { createOnSink };
