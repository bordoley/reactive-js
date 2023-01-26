/// <reference types="./Observable.allAreRunnable.d.ts" />
import ReadonlyArray_every from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray_map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { compose, isTrue } from '../../../functions.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';

const Observable_allAreRunnable = compose(ReadonlyArray_map(Observable_isRunnable), ReadonlyArray_every(isTrue));

export { Observable_allAreRunnable as default };
