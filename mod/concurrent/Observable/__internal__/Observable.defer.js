/// <reference types="./Observable.defer.d.ts" />

import { ObservableLike_observe, } from "../../../concurrent.js";
import { invoke, pipe } from "../../../functions.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
const Observable_defer = (factory) => Observable_create(observer => {
    pipe(factory(), invoke(ObservableLike_observe, observer));
});
export default Observable_defer;
