/// <reference types="./Observable.scanAsync.d.ts" />
import HigherOrderObservable_scanAsync from '../../__internal__/HigherOrderObservable/HigherOrderObservable.scanAsync.mjs';
import Observable_create from './Observable.create.mjs';

const Observable_scanAsync = HigherOrderObservable_scanAsync(Observable_create);

export { Observable_scanAsync as default };
