/// <reference types="./EventSource.create.d.ts" />

import { error } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Publisher from "../../Publisher.js";
const EventSource_create = (setup, options) => {
    const delegate = Publisher.create(options);
    try {
        setup(delegate);
    }
    catch (e) {
        delegate[DisposableLike_dispose](error(e));
    }
    return delegate;
};
export default EventSource_create;
