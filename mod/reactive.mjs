/// <reference types="./reactive.d.ts" />
const sinkInto = (sink) => source => {
    source.sink(sink);
    return source;
};
const sourceFrom = (source) => sink => {
    source.sink(sink);
    return sink;
};

export { sinkInto, sourceFrom };
