/// <reference types="./AsyncEnumerableLike.liftT.d.ts" />
import { interactive } from '../../../containers/__internal__/containers.internal.mjs';
import AsyncEnumerableLike__lift from './AsyncEnumerableLike.lift.mjs';

const AsyncEnumerableLike__liftT = {
    lift: AsyncEnumerableLike__lift,
    variance: interactive,
};

export { AsyncEnumerableLike__liftT as default };
