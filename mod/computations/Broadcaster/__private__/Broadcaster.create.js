/// <reference types="./Broadcaster.create.d.ts" />

import { error } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Publisher from "../../Publisher.js";
const Broadcaster_create = (setup, options) => {
    const delegate = Publisher.create(options);
    try {
        setup(delegate);
    }
    catch (e) {
        delegate[DisposableLike_dispose](error(e));
    }
    return delegate;
};
export default Broadcaster_create;
