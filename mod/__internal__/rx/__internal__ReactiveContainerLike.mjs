/// <reference types="./__internal__ReactiveContainerLike.d.ts" />
import { pipe, none, isSome, identity } from '../../functions.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { onDisposed, add } from '../util/__internal__DisposableLike.mjs';

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
