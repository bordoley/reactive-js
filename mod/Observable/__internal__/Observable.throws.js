/// <reference types="./Observable.throws.d.ts" />

import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { error, pipe, raise } from "../../functions.js";
import { ObservableLike_isPure } from "../../types.js";
const Observable_throws = (options) => {
    const { raise: factory = raise } = options ?? {};
    function* iterate() {
        raise(error(factory()));
    }
    return EnumerableBase_create(() => pipe(iterate(), Iterator_enumerate()), {
        [ObservableLike_isPure]: false,
    });
};
export default Observable_throws;
