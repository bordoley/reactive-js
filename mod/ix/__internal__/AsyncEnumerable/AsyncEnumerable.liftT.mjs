/// <reference types="./AsyncEnumerable.liftT.d.ts" />
import { interactive } from '../../../containers/__internal__/containers.internal.mjs';
import AsyncEnumerable$lift from './AsyncEnumerable.lift.mjs';

const AsyncEnumerable$liftT = {
    lift: AsyncEnumerable$lift,
    variance: interactive,
};

export { AsyncEnumerable$liftT as default };
