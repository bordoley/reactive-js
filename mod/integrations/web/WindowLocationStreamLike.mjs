/// <reference types="./WindowLocationStreamLike.d.ts" />
import { l as DispatcherLike_dispatch } from '../../DisposableLike-82e2991c.mjs';
import { WindowLocationStreamLike_goBack } from '../web.mjs';

const goBack = (stream) => {
    stream[WindowLocationStreamLike_goBack]();
    return stream;
};
const replaceWindowLocation = (uri) => stream => {
    stream[DispatcherLike_dispatch](uri, { replace: true });
    return stream;
};

export { goBack, replaceWindowLocation };
