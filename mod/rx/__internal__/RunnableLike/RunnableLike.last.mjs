/// <reference types="./RunnableLike.last.d.ts" />
import { none, pipe } from '../../../functions.mjs';
import RunnableLike__forEach from './RunnableLike.forEach.mjs';
import RunnableLike__run from './RunnableLike.run.mjs';

const RunnableLike__last = () => src => {
    let result = none;
    pipe(src, RunnableLike__forEach(next => {
        result = next;
    }), RunnableLike__run());
    return result;
};

export { RunnableLike__last as default };
