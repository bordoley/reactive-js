/// <reference types="./Enumerable.toReadonlyArray.d.ts" />
import { pipe, isSome, raise } from '../../../functions.mjs';
import Disposable$getError from '../../../util/__internal__/Disposable/Disposable.getError.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$move from '../Enumerator/Enumerator.move.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';

const Enumerable$toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, Enumerable$enumerate());
    const result = [];
    while (Enumerator$move(enumerator)) {
        result.push(Enumerator$getCurrent(enumerator));
    }
    const error = Disposable$getError(enumerator);
    return isSome(error) ? raise(error) : result;
};

export { Enumerable$toReadonlyArray as default };
