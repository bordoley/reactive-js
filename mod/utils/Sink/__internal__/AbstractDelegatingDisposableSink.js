/// <reference types="./AbstractDelegatingDisposableSink.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import AbstractDelegatingDisposable from "../../Disposable/__internal__/AbstractDelegatingDisposable.js";
import * as DisposableContainer from "../../DisposableContainer.js";
class AbstractDelegatingDisposableSink extends AbstractDelegatingDisposable {
    constructor(sink) {
        super(sink);
        pipe(this, DisposableContainer.onComplete(bindMethod(this, SinkLike_complete)));
    }
}
export default AbstractDelegatingDisposableSink;
