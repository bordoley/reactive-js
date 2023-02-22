/// <reference types="./ReactiveContainer.sinkInto.d.ts" />

import { ReactiveContainerLike_sinkInto, } from "../../../rx.js";
const ReactiveContainer_sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};
export default ReactiveContainer_sinkInto;
