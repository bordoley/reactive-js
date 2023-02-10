/// <reference types="./Observable.never.d.ts" />
import { ignore } from '../../../functions.mjs';
import EnumerableObservable_create from '../../EnumerableObservable/__internal__/EnumerableObservable.create.mjs';

const Observable_never = () => EnumerableObservable_create(ignore);

export { Observable_never as default };
