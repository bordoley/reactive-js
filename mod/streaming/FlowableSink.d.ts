/**
 * @category Constructor
 */
export declare const create: <T>(op: import("../containers.js").ContainerOperator<import("../rx.js").ObservableLike<unknown>, T, import("../streaming.js").FlowableState | import("../functions.js").Updater<import("../streaming.js").FlowableState>>) => import("../streaming.js").FlowableSinkLike<T>;
