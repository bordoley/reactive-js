/// <reference types="./Runnable.map.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_map from '../../../containers/__internal__/StatefulContainer/StatefulContainer.map.mjs';
import { pipe } from '../../../functions.mjs';
import { Sink_mapMixin } from '../Sink/Sink.mapMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = Sink_mapMixin();
    return pipe(createInstanceFactory(typedMapSinkMixin), StatefulContainer_map(Runnable_liftT));
})();

export { Runnable_map as default };
