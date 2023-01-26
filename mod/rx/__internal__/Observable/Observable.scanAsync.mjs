/// <reference types="./Observable.scanAsync.d.ts" />
import HigherOrderObservable$scanAsync from '../HigherOrderObservable/HigherOrderObservable.scanAsync.mjs';
import Observable$create from './Observable.create.mjs';

const Observable$scanAsync = HigherOrderObservable$scanAsync(Observable$create);

export { Observable$scanAsync as default };
