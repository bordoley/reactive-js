import { Map } from "../../../containers.js";
import { Defer, EncodeUtf8, ObservableContainerLike } from "../../../rx.js";
declare const HigherOrderObservable_encodeUtf8: <C extends ObservableContainerLike<unknown>>(defer: <T>(factory: import("../../../functions.js").Factory<import("../../../containers.js").ContainerOf<C, T>>) => import("../../../containers.js").ContainerOf<C, T>, map: <TA, TB>(selector: import("../../../functions.js").Function1<TA, TB>) => import("../../../containers.js").ContainerOperator<C, TA, TB>) => () => import("../../../containers.js").ContainerOperator<C, string, Uint8Array>;
export default HigherOrderObservable_encodeUtf8;
