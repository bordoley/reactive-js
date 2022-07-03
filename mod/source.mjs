/// <reference types="./source.d.ts" />
import { AbtractDisposableLiftable } from './liftable.mjs';

class AbtractDisposableSource extends AbtractDisposableLiftable {
}
const sinkInto = (sink) => source => {
    source.sink(sink);
    return source;
};
const sourceFrom = (source) => sink => {
    source.sink(sink);
    return sink;
};

export { AbtractDisposableSource, sinkInto, sourceFrom };
