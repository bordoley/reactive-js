/// <reference types="./Observable.allAreEnumerable.d.ts" />
import ReadonlyArray$every from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray$map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { compose, isTrue } from '../../../functions.mjs';
import Observable$isEnumerable from './Observable.isEnumerable.mjs';

const Observable$allAreEnumerable = compose(ReadonlyArray$map(Observable$isEnumerable), ReadonlyArray$every(isTrue));

export { Observable$allAreEnumerable as default };
