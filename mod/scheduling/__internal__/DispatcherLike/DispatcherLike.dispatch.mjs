/// <reference types="./DispatcherLike.dispatch.d.ts" />
import { DispatcherLike_dispatch } from '../../../scheduling.mjs';

const dispatch = (v) => dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
};

export { dispatch };
