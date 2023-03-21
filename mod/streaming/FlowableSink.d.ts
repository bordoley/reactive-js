/**
 * @category Constructor
 */
export declare const create: <T>(op: import("../containers.js").ContainerOperator<import("../rx.js").ObservableLike<unknown>, T, boolean | import("../functions.js").Updater<boolean>>) => import("../streaming.js").FlowableSinkLike<T>;
