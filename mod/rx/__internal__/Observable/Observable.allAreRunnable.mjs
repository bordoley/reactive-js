/// <reference types="./Observable.allAreRunnable.d.ts" />
import ReadonlyArray$every from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray$map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { compose, isTrue } from '../../../functions.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';

const Observable$allAreRunnable = compose(ReadonlyArray$map(Observable$isRunnable), ReadonlyArray$every(isTrue));

export { Observable$allAreRunnable as default };
