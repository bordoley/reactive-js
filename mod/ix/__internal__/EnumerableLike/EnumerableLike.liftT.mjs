/// <reference types="./EnumerableLike.liftT.d.ts" />
import { interactive } from '../../../containers/__internal__/containers.internal.mjs';
import EnumerableLike__lift from './EnumerableLike.lift.mjs';

const EnumerableLike__liftT = {
    lift: EnumerableLike__lift,
    variance: interactive,
};

export { EnumerableLike__liftT as default };
