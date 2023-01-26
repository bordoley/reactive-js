/// <reference types="./RunnableObservable.scanAsync.d.ts" />
import HigherOrderObservable_scanAsync from '../HigherOrderObservable/HigherOrderObservable.scanAsync.mjs';
import RunnableObservable_create from './RunnableObservable.create.mjs';

const RunnableObservable_scanAsync = HigherOrderObservable_scanAsync(RunnableObservable_create);

export { RunnableObservable_scanAsync as default };
