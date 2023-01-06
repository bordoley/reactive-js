/// <reference types="./RunnableLike.first.d.ts" />
import { none, pipe } from '../../../functions.mjs';
import RunnableLike__forEach from './RunnableLike.forEach.mjs';
import RunnableLike__run from './RunnableLike.run.mjs';
import RunnableLike__takeFirst from './RunnableLike.takeFirst.mjs';

const RunnableLike__first = () => src => {
    let result = none;
    pipe(src, RunnableLike__takeFirst(), RunnableLike__forEach(next => {
        result = next;
    }), RunnableLike__run());
    return result;
};

export { RunnableLike__first as default };
