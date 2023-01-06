/// <reference types="./RunnableLike.liftT.d.ts" />
import { reactive } from '../../../containers/__internal__/containers.internal.mjs';
import RunnableLike__lift from './RunnableLike.lift.mjs';

const RunnableLike__liftT = {
    lift: RunnableLike__lift,
    variance: reactive,
};

export { RunnableLike__liftT as default };
