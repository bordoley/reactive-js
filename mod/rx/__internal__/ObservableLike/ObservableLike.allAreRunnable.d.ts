import { Function1 } from "../../../functions.mjs";
import { ReadonlyArrayLike } from "../../../containers.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const allAreRunnable: Function1<ReadonlyArrayLike<ObservableLike<unknown>>, boolean>;
export { allAreRunnable as default };
