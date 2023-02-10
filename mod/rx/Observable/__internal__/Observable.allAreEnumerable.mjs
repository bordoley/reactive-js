/// <reference types="./Observable.allAreEnumerable.d.ts" />
import ReadonlyArray_every from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.mjs';
import ReadonlyArray_map from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.mjs';
import { compose, isTrue } from '../../../functions.mjs';
import Observable_isEnumerable from './Observable.isEnumerable.mjs';

const Observable_allAreEnumerable = compose(ReadonlyArray_map(Observable_isEnumerable), ReadonlyArray_every(isTrue));

export { Observable_allAreEnumerable as default };
