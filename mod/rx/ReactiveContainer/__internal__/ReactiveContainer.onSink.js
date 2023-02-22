/// <reference types="./ReactiveContainer.onSink.d.ts" />

import { identity, isFunction, isSome, none, pipe, } from "../../../functions.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import ReactiveContainer_sinkInto from "./ReactiveContainer.sinkInto.js";
const ReactiveContainer_onSink = (createReactiveContainer, src, f) => createReactiveContainer(sink => {
    pipe(src, ReactiveContainer_sinkInto(sink));
    const disposable = f() || none;
    pipe(sink, isFunction(disposable)
        ? Disposable_onDisposed(disposable)
        : isSome(disposable)
            ? Disposable_add(disposable)
            : identity);
});
export default ReactiveContainer_onSink;
