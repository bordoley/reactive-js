[Reactive-JS](../README.md) / [concurrent/Streamable](../modules/concurrent_Streamable.md) / StreamableModule

# Interface: StreamableModule

[concurrent/Streamable](../modules/concurrent_Streamable.md).StreamableModule

## Table of contents

### Methods

- [create](concurrent_Streamable.StreamableModule.md#create)
- [createAnimationGroupEventHandler](concurrent_Streamable.StreamableModule.md#createanimationgroupeventhandler)
- [createEventHandler](concurrent_Streamable.StreamableModule.md#createeventhandler)
- [createInMemoryCache](concurrent_Streamable.StreamableModule.md#createinmemorycache)
- [createPersistentCache](concurrent_Streamable.StreamableModule.md#createpersistentcache)
- [createStateStore](concurrent_Streamable.StreamableModule.md#createstatestore)
- [identity](concurrent_Streamable.StreamableModule.md#identity)
- [syncState](concurrent_Streamable.StreamableModule.md#syncstate)

## Methods

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](concurrent.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](concurrent.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)<`TReq`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](concurrent.StreamLike.md)<`TReq`, `T`\>\>

___

### createAnimationGroupEventHandler

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`TKey`, [`Function1`](../modules/functions.md#function1)<`TEvent`, [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`TKey`, [`Function1`](../modules/functions.md#function1)<`TEvent`, [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`TKey`, [`Function1`](../modules/functions.md#function1)<`TEvent`, [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`TKey`, [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`TKey`, [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`TKey`, [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>\>

___

### createEventHandler

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<`TEventType`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<`TEventType`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<`TEventType`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`): [`StreamableLike`](concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<`TEventType`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\>\> |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

___

### createInMemoryCache

▸ **createInMemoryCache**<`T`\>(`options?`): [`StreamableLike`](concurrent.StreamableLike.md)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>, `never`, [`CacheLike`](concurrent.CacheLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>, `never`, [`CacheLike`](concurrent.CacheLike.md)<`T`\>\>

___

### createPersistentCache

▸ **createPersistentCache**<`T`\>(`persistentStore`, `options?`): [`StreamableLike`](concurrent.StreamableLike.md)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>, `never`, [`CacheLike`](concurrent.CacheLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `persistentStore` | `Object` |
| `persistentStore.load` | (`keys`: `ReadonlySet`<`string`\>) => [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`Readonly`<`Record`<`string`, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>\> |
| `persistentStore.store` | (`updates`: `Readonly`<`Record`<`string`, `T`\>\>) => [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`void`\> |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)<`string`, [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>, `never`, [`CacheLike`](concurrent.CacheLike.md)<`T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](concurrent.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>

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
| `initialState` | [`Factory`](../modules/functions.md#factory)<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> | - |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](concurrent.StreamableLike.md)<`T`, `T`, [`StreamLike`](concurrent.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`T`, `T`, [`StreamLike`](concurrent.StreamLike.md)<`T`, `T`\>\>

___

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](../modules/functions.md#function1)<[`StreamableLike`](concurrent.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>, [`StreamableLike`](concurrent.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | [`Function1`](../modules/functions.md#function1)<`T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>\>\> |
| `onChange` | [`Function2`](../modules/functions.md#function2)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>\>\> |
| `options?` | `Object` |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StreamableLike`](concurrent.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>, [`StreamableLike`](concurrent.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>\>
