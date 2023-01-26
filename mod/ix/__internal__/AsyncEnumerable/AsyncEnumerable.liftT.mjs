/// <reference types="./AsyncEnumerable.liftT.d.ts" />
import { interactive } from '../../../containers/__internal__/containers.internal.mjs';
import AsyncEnumerable_lift from './AsyncEnumerable.lift.mjs';

const AsyncEnumerable_liftT = {
    lift: AsyncEnumerable_lift,
    variance: interactive,
};

export { AsyncEnumerable_liftT as default };
