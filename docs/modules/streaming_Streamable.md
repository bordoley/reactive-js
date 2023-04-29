[Reactive-JS](../README.md) / streaming/Streamable

# Module: streaming/Streamable

## Table of contents

### Constructor Functions

- [create](streaming_Streamable.md#create)
- [createAnimationEventHandler](streaming_Streamable.md#createanimationeventhandler)
- [createEventHandler](streaming_Streamable.md#createeventhandler)
- [createInMemoryCache](streaming_Streamable.md#createinmemorycache)
- [createPersistentCache](streaming_Streamable.md#createpersistentcache)
- [createStateStore](streaming_Streamable.md#createstatestore)
- [identity](streaming_Streamable.md#identity)

## Constructor Functions

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TReq`, `T`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\>

___

### createAnimationEventHandler

▸ **createAnimationEventHandler**<`TEvent`, `T`, `TKey`\>(`animations`, `options`): [`AnimationEventHandlerLike`](../interfaces/streaming.AnimationEventHandlerLike.md)<`TEvent`, `T`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `unknown` |
| `T` | `number` |
| `TKey` | extends `string` \| `number` \| `symbol` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animations` | [`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T`\>[]\>, `TKey`\> |
| `options` | `Object` |
| `options.concurrency?` | `number` |
| `options.mode` | ``"switching"`` |

#### Returns

[`AnimationEventHandlerLike`](../interfaces/streaming.AnimationEventHandlerLike.md)<`TEvent`, `T`, `TKey`\>

▸ **createAnimationEventHandler**<`TEvent_1`, `T_1`, `TKey_1`\>(`animations`, `options`): [`AnimationEventHandlerLike`](../interfaces/streaming.AnimationEventHandlerLike.md)<`TEvent_1`, `T_1`, `TKey_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent_1` | `unknown` |
| `T_1` | `number` |
| `TKey_1` | extends `string` \| `number` \| `symbol` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animations` | [`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`Function1`](functions.md#function1)<`TEvent_1`, [`AnimationConfig`](rx.md#animationconfig)<`T_1`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T_1`\>[]\>, `TKey_1`\> |
| `options` | `Object` |
| `options.concurrency?` | `number` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`AnimationEventHandlerLike`](../interfaces/streaming.AnimationEventHandlerLike.md)<`TEvent_1`, `T_1`, `TKey_1`\>

▸ **createAnimationEventHandler**<`TEvent_2`, `T_2`, `TKey_2`\>(`animations`, `options`): [`AnimationEventHandlerLike`](../interfaces/streaming.AnimationEventHandlerLike.md)<`TEvent_2`, `T_2`, `TKey_2`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent_2` | `unknown` |
| `T_2` | `number` |
| `TKey_2` | extends `string` \| `number` \| `symbol` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animations` | [`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`Function1`](functions.md#function1)<`TEvent_2`, [`AnimationConfig`](rx.md#animationconfig)<`T_2`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T_2`\>[]\>, `TKey_2`\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`AnimationEventHandlerLike`](../interfaces/streaming.AnimationEventHandlerLike.md)<`TEvent_2`, `T_2`, `TKey_2`\>

▸ **createAnimationEventHandler**<`TEvent_3`, `T_3`, `TKey_3`\>(`animations`): [`AnimationEventHandlerLike`](../interfaces/streaming.AnimationEventHandlerLike.md)<`TEvent_3`, `T_3`, `TKey_3`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent_3` | `unknown` |
| `T_3` | `number` |
| `TKey_3` | extends `string` \| `number` \| `symbol` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animations` | [`ReadonlyObjectMapLike`](keyed_containers.md#readonlyobjectmaplike)<[`Function1`](functions.md#function1)<`TEvent_3`, [`AnimationConfig`](rx.md#animationconfig)<`T_3`\> \| readonly [`AnimationConfig`](rx.md#animationconfig)<`T_3`\>[]\>, `TKey_3`\> |

#### Returns

[`AnimationEventHandlerLike`](../interfaces/streaming.AnimationEventHandlerLike.md)<`TEvent_3`, `T_3`, `TKey_3`\>

___

### createEventHandler

▸ **createEventHandler**<`TEvent`\>(`op`, `options`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TEvent`, `boolean`\>\>

Returns an event handler that invokes the observable function.

#### Type parameters

| Name |
| :------ |
| `TEvent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEvent`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TEvent`, `boolean`\>\>

▸ **createEventHandler**<`TEvent_1`\>(`op`, `options`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TEvent_1`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TEvent_1`, `boolean`\>\>

Returns an event handler that invokes the observable function.

#### Type parameters

| Name |
| :------ |
| `TEvent_1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEvent_1`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TEvent_1`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TEvent_1`, `boolean`\>\>

▸ **createEventHandler**<`TEvent_2`\>(`op`, `options`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TEvent_2`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TEvent_2`, `boolean`\>\>

Returns an event handler that invokes the observable function.

#### Type parameters

| Name |
| :------ |
| `TEvent_2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEvent_2`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TEvent_2`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TEvent_2`, `boolean`\>\>

▸ **createEventHandler**<`TEvent_3`\>(`op`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TEvent_3`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TEvent_3`, `boolean`\>\>

Returns an event handler that invokes the observable function.

#### Type parameters

| Name |
| :------ |
| `TEvent_3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEvent_3`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TEvent_3`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TEvent_3`, `boolean`\>\>

___

### createInMemoryCache

▸ **createInMemoryCache**<`T`\>(`options?`): [`CacheLike`](../interfaces/streaming.CacheLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`CacheLike`](../interfaces/streaming.CacheLike.md)<`T`\>

___

### createPersistentCache

▸ **createPersistentCache**<`T`\>(`persistentStore`, `options?`): [`CacheLike`](../interfaces/streaming.CacheLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `persistentStore` | `Object` |
| `persistentStore.load` | (`keys`: `ReadonlySet`<`string`\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`Readonly`<`Record`<`string`, [`Optional`](functions.md#optional)<`T`\>\>\>\> |
| `persistentStore.store` | (`updates`: `Readonly`<`Record`<`string`, `T`\>\>) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\> |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`CacheLike`](../interfaces/streaming.CacheLike.md)<`T`\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | [`Factory`](functions.md#factory)<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> | - |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `T`\>\>
