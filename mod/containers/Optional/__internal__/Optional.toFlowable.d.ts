declare const Optional_toFlowable: <T>(options?: {
    delay?: number;
}) => import("../../../functions.js").Function1<import("../../../functions.js").Optional<T>, import("../../../streaming.js").FlowableLike<T>>;
export default Optional_toFlowable;
