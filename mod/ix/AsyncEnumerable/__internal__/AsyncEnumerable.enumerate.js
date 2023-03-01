/// <reference types="./AsyncEnumerable.enumerate.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_empty from "../../../rx/Observable/__internal__/Observable.empty.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import Stream_create from "../../../streaming/Stream/__internal__/Stream.create.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Enumerable_enumerate from "../../Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move.js";
const AsyncEnumerable_enumerate = (scheduler, options) => (enumerable) => {
    const enumerator = pipe(enumerable, Enumerable_enumerate());
    const stream = Stream_create(Observable_concatMap(_ => {
        Enumerator_move(enumerator);
        return Enumerator_hasCurrent(enumerator)
            ? pipe(Enumerator_getCurrent(enumerator), Observable_takeFirst())
            : Observable_empty();
    }), scheduler, options);
    return pipe(stream, Disposable_addTo(enumerator));
};
export default AsyncEnumerable_enumerate;
