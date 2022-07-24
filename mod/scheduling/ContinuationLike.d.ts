import { DisposableLike } from "../util/DisposableLike.mjs";
import { Identity } from "../util/functions.mjs";
declare const ContinuationLike_run: unique symbol;
/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
interface ContinuationLike extends DisposableLike {
    [ContinuationLike_run](): void;
}
declare const run: Identity<ContinuationLike>;
export { ContinuationLike, ContinuationLike_run, run };
