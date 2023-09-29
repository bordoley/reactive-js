/// <reference types="./Enumerator.empty.d.ts" />

import { isFunction, none } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../../utils.js";
const empty = {
    [EnumeratorLike_current]: none,
    [EnumeratorLike_hasCurrent]: false,
    [EnumeratorLike_isCompleted]: true,
    [EnumeratorLike_move]() {
        return false;
    },
    [DisposableLike_error]: none,
    [DisposableLike_isDisposed]: true,
    [DisposableLike_add](disposable) {
        if (isFunction(disposable)) {
            try {
                disposable(none);
            }
            catch (_) {
                /* Proactively catch Errors thrown in teardown logic. Teardown functions
                 * shouldn't throw, so this is to prevent unexpected Errors.
                 */
            }
        }
        else {
            disposable[DisposableLike_dispose]();
        }
    },
    [DisposableLike_dispose](_error) { },
};
const Enumerator_empty = () => empty;
export default Enumerator_empty;
