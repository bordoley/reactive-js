import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
declare const AsyncEnumerator_lift: <TA, TB>(op: ContainerOperator<ObservableLike, TA, TB>) => (stream: StreamLike<void, TA> & DisposableLike) => StreamLike<void, TB> & DisposableLike;
export default AsyncEnumerator_lift;
