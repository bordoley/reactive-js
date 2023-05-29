/// <reference types="./Observable.toReadonlyArray.d.ts" />

import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import Observable_run from "../../Observable/__internal__/Observable.run.js";
import { bind, pipe } from "../../functions.js";
import { DisposableLike_dispose, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
const Observable_toReadonlyArray = () => observable => {
    if (Observable_isEnumerable(observable)) {
        const result = [];
        const enumerator = observable[EnumerableLike_enumerate]();
        while (enumerator[EnumeratorLike_move]()) {
            result.push(enumerator[EnumeratorLike_current]);
        }
        // bump the enumerator again to ensure it has completed.
        // really only need to drive up unit test coverage
        enumerator[EnumeratorLike_move]();
        enumerator[DisposableLike_dispose]();
        Disposable_raiseIfDisposedWithError(enumerator);
        return result;
    }
    else {
        const result = [];
        pipe(observable, Observable_forEach(bind(Array.prototype.push, result)), Observable_run());
        return result;
    }
};
export default Observable_toReadonlyArray;
