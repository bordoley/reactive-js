import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
declare const AsyncEnumerator_create: <TA, TB>(stream: StreamLike<void, TA>, op: ContainerOperator<ObservableLike, TA, TB>) => StreamLike<void, TB>;
export default AsyncEnumerator_create;
