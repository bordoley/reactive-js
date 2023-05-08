[Reactive-JS](../README.md) / rx/Streamable

# Module: rx/Streamable

## Table of contents

### Constructor Functions

- [create](rx_Streamable.md#create)
- [createAnimationGroupEventHandler](rx_Streamable.md#createanimationgroupeventhandler)
- [createEventHandler](rx_Streamable.md#createeventhandler)
- [createInMemoryCache](rx_Streamable.md#createinmemorycache)
- [createPersistentCache](rx_Streamable.md#createpersistentcache)
- [createStateStore](rx_Streamable.md#createstatestore)
- [identity](rx_Streamable.md#identity)

## Constructor Functions

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableContainer`](../interfaces/rx.ObservableContainer.md), `TReq`, `T`\> |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TReq`, `T`\>\>

___

### createAnimationGroupEventHandler

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`TKey`, [`Function1`](functions.md#function1)<`TEvent`, [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TEvent_1`, `TKey_1`, `T_1`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEvent_1`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEvent_1`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_1`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_1`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent_1` | `TEvent_1` |
| `TKey_1` | extends `string` \| `number` \| `symbol` |
| `T_1` | `T_1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`TKey_1`, [`Function1`](functions.md#function1)<`TEvent_1`, [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_1`\> \| readonly [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_1`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEvent_1`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEvent_1`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_1`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_1`\>\>\>

▸ **createAnimationGroupEventHandler**<`TEvent_2`, `TKey_2`, `T_2`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEvent_2`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEvent_2`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_2`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_2`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent_2` | `TEvent_2` |
| `TKey_2` | extends `string` \| `number` \| `symbol` |
| `T_2` | `T_2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`TKey_2`, [`Function1`](functions.md#function1)<`TEvent_2`, [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_2`\> \| readonly [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_2`\>[]\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEvent_2`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEvent_2`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_2`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_2`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey_3`, `T_3`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_3`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_3`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey_3` | extends `string` \| `number` \| `symbol` |
| `T_3` | `T_3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`TKey_3`, [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_3`\> \| readonly [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_3`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_3`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_3`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey_4`, `T_4`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_4`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_4`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey_4` | extends `string` \| `number` \| `symbol` |
| `T_4` | `T_4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`TKey_4`, [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_4`\> \| readonly [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_4`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_4`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_4`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey_5`, `T_5`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_5`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_5`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey_5` | extends `string` \| `number` \| `symbol` |
| `T_5` | `T_5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`TKey_5`, [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_5`\> \| readonly [`AnimationConfig`](rx.Reactive.md#animationconfig)<`T_5`\>[]\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/util.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/containers.DictionaryLike.md)<`TKey_5`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T_5`\>\>\>

___

### createEventHandler

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEventType`, `boolean`\>\>

Returns an event handler that invokes the observable function.

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType_1`\>(`op`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEventType_1`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEventType_1`, `boolean`\>\>

Returns an event handler that invokes the observable function.

#### Type parameters

| Name |
| :------ |
| `TEventType_1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType_1`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEventType_1`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEventType_1`, `boolean`\>\>

▸ **createEventHandler**<`TEventType_2`\>(`op`, `options`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEventType_2`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEventType_2`, `boolean`\>\>

Returns an event handler that invokes the observable function.

#### Type parameters

| Name |
| :------ |
| `TEventType_2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType_2`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEventType_2`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEventType_2`, `boolean`\>\>

▸ **createEventHandler**<`TEventType_3`\>(`op`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEventType_3`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEventType_3`, `boolean`\>\>

Returns an event handler that invokes the observable function.

#### Type parameters

| Name |
| :------ |
| `TEventType_3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType_3`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\> |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`TEventType_3`, `boolean`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`TEventType_3`, `boolean`\>\>

___

### createInMemoryCache

▸ **createInMemoryCache**<`T`\>(`options?`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<[`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`, [`StreamLike`](../interfaces/rx.StreamLike.md)<[`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`\> & [`AssociativeCollectionLike`](../interfaces/containers.AssociativeCollectionLike.md)<`string`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>\>

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

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<[`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`, [`StreamLike`](../interfaces/rx.StreamLike.md)<[`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`\> & [`AssociativeCollectionLike`](../interfaces/containers.AssociativeCollectionLike.md)<`string`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>\>

___

### createPersistentCache

▸ **createPersistentCache**<`T`\>(`persistentStore`, `options?`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<[`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`, [`StreamLike`](../interfaces/rx.StreamLike.md)<[`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`\> & [`AssociativeCollectionLike`](../interfaces/containers.AssociativeCollectionLike.md)<`string`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>\>

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

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<[`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`, [`StreamLike`](../interfaces/rx.StreamLike.md)<[`ReadonlyObjectMapLike`](containers.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`\> & [`AssociativeCollectionLike`](../interfaces/containers.AssociativeCollectionLike.md)<`string`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/rx.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

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

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/rx.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](../interfaces/rx.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/rx.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/rx.StreamLike.md)<`T`, `T`\>\>
