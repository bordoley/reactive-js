/// <reference types="./Runnable.empty.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Runnable_create from './Runnable.create.mjs';

const Runnable_empty = () => Runnable_create(sink => {
    pipe(sink, Disposable_dispose());
});

export { Runnable_empty as default };
