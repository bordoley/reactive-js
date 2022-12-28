/// <reference types="./ReactiveContainerLike.onSink.d.ts" />
import { pipe, none, isSome, identity } from '../../../functions.mjs';
import add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import onDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';

const onSink = (createReactiveContainer, src, f) => createReactiveContainer(sink => {
    pipe(src, sinkInto(sink));
    const disposable = f() || none;
    pipe(sink, disposable instanceof Function
        ? onDisposed(disposable)
        : isSome(disposable)
            ? add(disposable)
            : identity);
});

export { onSink as default };
