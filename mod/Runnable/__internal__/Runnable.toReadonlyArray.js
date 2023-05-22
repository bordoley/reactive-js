/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_toReadonlyArray = () => observable => {
    if (Observable_isEnumerable(observable)) {
        const result = [];
        const enumerator = observable[EnumerableLike_enumerate]();
        while (enumerator[EnumeratorLike_move]()) {
            result.push(enumerator[EnumeratorLike_current]);
        }
        enumerator[DisposableLike_dispose]();
        Disposable_raiseIfDisposedWithError(enumerator);
        return result;
    }
    else {
        const result = [];
        pipe(observable, Observable_forEach((next) => {
            result.push(next);
        }), Runnable_run());
        return result;
    }
};
export default Runnable_toReadonlyArray;
