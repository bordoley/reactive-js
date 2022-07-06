/// <reference types="./reactiveContainer.d.ts" />
const sinkInto = (sink) => source => {
    source.sinkInto(sink);
    return source;
};
const sourceFrom = (source) => sink => {
    source.sinkInto(sink);
    return sink;
};

export { sinkInto, sourceFrom };
