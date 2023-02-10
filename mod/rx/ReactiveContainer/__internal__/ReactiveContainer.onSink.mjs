/// <reference types="./ReactiveContainer.onSink.d.ts" />
import { pipe, none, isFunction, isSome, identity } from '../../../functions.mjs';
import Disposable_add from '../../../util/Disposable/__internal__/Disposable.add.mjs';
import Disposable_onDisposed from '../../../util/Disposable/__internal__/Disposable.onDisposed.mjs';
import ReactiveContainer_sinkInto from './ReactiveContainer.sinkInto.mjs';

const ReactiveContainer_onSink = (createReactiveContainer, src, f) => createReactiveContainer(sink => {
    pipe(src, ReactiveContainer_sinkInto(sink));
    const disposable = f() || none;
    pipe(sink, isFunction(disposable)
        ? Disposable_onDisposed(disposable)
        : isSome(disposable)
            ? Disposable_add(disposable)
            : identity);
});

export { ReactiveContainer_onSink as default };
