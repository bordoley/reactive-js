/// <reference types="./ReactiveContainerLike.d.ts" />
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
const sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};
const sourceFrom = (source) => sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
};

export { ReactiveContainerLike_sinkInto, sinkInto, sourceFrom };
