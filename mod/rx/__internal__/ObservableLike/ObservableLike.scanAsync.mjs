/// <reference types="./ObservableLike.scanAsync.d.ts" />
import HigherOrderObservableLike__scanAsync from '../HigherOrderObservableLike/HigherOrderObservableLike.scanAsync.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';

const ObservableLike__scanAsync = HigherOrderObservableLike__scanAsync(ObservableLike__create);

export { ObservableLike__scanAsync as default };
