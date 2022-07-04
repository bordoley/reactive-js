/// <reference types="./reactive.d.ts" />
import { AbtractDisposableLiftable } from './liftable.mjs';

class AbtractDisposableReactiveSource extends AbtractDisposableLiftable {
}
const sinkInto = (sink) => source => {
    source.sink(sink);
    return source;
};
const sourceFrom = (source) => sink => {
    source.sink(sink);
    return sink;
};

export { AbtractDisposableReactiveSource, sinkInto, sourceFrom };
