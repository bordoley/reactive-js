/// <reference types="./Enumerable.toReadonlyArray.d.ts" />
import { pipe, isSome, raiseError } from '../../../functions.mjs';
import Disposable_getError from '../../../util/Disposable/__internal__/Disposable.getError.mjs';
import Enumerator_getCurrent from '../../Enumerator/__internal__/Enumerator.getCurrent.mjs';
import Enumerator_move from '../../Enumerator/__internal__/Enumerator.move.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const Enumerable_toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, Enumerable_enumerate());
    const result = [];
    while (Enumerator_move(enumerator)) {
        result.push(Enumerator_getCurrent(enumerator));
    }
    const error = Disposable_getError(enumerator);
    return isSome(error) ? raiseError(error) : result;
};

export { Enumerable_toReadonlyArray as default };
