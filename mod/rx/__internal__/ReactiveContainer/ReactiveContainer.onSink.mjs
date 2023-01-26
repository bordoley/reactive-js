/// <reference types="./ReactiveContainer.onSink.d.ts" />
import { pipe, none, isSome, identity } from '../../../functions.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import ReactiveContainer$sinkInto from './ReactiveContainer.sinkInto.mjs';

const ReactiveContainer$onSink = (createReactiveContainer, src, f) => createReactiveContainer(sink => {
    pipe(src, ReactiveContainer$sinkInto(sink));
    const disposable = f() || none;
    pipe(sink, disposable instanceof Function
        ? Disposable$onDisposed(disposable)
        : isSome(disposable)
            ? Disposable$add(disposable)
            : identity);
});

export { ReactiveContainer$onSink as default };
