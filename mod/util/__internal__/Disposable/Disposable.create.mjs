/// <reference types="./Disposable.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import Disposable_mixin from './Disposable.mixin.mjs';

const Disposable_create = 
/*@__PURE__*/ createInstanceFactory(Disposable_mixin);

export { Disposable_create as default };
