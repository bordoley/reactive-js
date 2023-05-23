/// <reference types="./Observable.defer.d.ts" />

import Observable_create from "../../Observable/__internal__/Observable.create.js";
import { invoke, pipe } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
const Observable_defer = (factory) => Observable_create(observer => {
    pipe(factory(), invoke(ObservableLike_observe, observer));
});
export default Observable_defer;
