import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
declare const AsyncEnumerator_create: <TA, TB>() => (stream: StreamLike<void, TA> & DisposableLike, op: ContainerOperator<ObservableLike, TA, TB>) => StreamLike<void, TB> & DisposableLike;
export default AsyncEnumerator_create;
