/// <reference types="./Runnable.empty.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Runnable$create from './Runnable.create.mjs';

const Runnable$empty = () => Runnable$create(sink => {
    pipe(sink, Disposable$dispose());
});

export { Runnable$empty as default };
