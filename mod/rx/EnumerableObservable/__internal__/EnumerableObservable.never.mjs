/// <reference types="./EnumerableObservable.never.d.ts" />
import { ignore } from '../../../functions.mjs';
import EnumerableObservable_create from './EnumerableObservable.create.mjs';

const EnumerableObservable_never = () => EnumerableObservable_create(ignore);

export { EnumerableObservable_never as default };
