/// <reference types="./Disposable.create.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import Disposable$mixin from './Disposable.mixin.mjs';

const Disposable$create = 
/*@__PURE__*/ createInstanceFactory(Disposable$mixin);

export { Disposable$create as default };
