/// <reference types="./Streamable.actionReducer.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { StoreLike_value, StreamableLike_stream, } from "../../../computations.js";
import { compose, none, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Observable from "../../Observable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const m = Computation.makeModule({
    genPure: Observable.genPure,
    concat: Observable.concat,
});
const Streamable_actionReducer = 
/*@__PURE__*/ (() => {
    const createStateStoreStream = mixInstanceFactory(include(StreamMixin()), function StateStoreStream(reducer, initialState, setupOptions, scheduler, options) {
        const acc = initialState();
        this[StoreLike_value] = acc;
        const operator = compose(Observable.scan(reducer, initialState), Computation.startWith(m, acc), Observable.distinctUntilChanged(setupOptions), Observable.forEach(acc => {
            this[StoreLike_value] = acc;
        }));
        init(StreamMixin(), this, operator, scheduler, options);
        return this;
    }, props({
        [StoreLike_value]: none,
    }));
    return (reducer, initialState, setupOptions) => ({
        [StreamableLike_stream]: (scheduler, options) => createStateStoreStream(reducer, initialState, setupOptions, scheduler, options),
    });
})();
export default Streamable_actionReducer;
