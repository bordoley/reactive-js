[Reactive-JS](../README.md) / concurrent/Streamable

# Module: concurrent/Streamable

## Table of contents

### Interfaces

- [StreamableModule](../interfaces/concurrent_Streamable.StreamableModule.md)

### Type Aliases

- [Signature](concurrent_Streamable.md#signature)

### Functions

- [create](concurrent_Streamable.md#create)
- [createAnimationGroupEventHandler](concurrent_Streamable.md#createanimationgroupeventhandler)
- [createEventHandler](concurrent_Streamable.md#createeventhandler)
- [createInMemoryCache](concurrent_Streamable.md#createinmemorycache)
- [createPersistentCache](concurrent_Streamable.md#createpersistentcache)
- [createStateStore](concurrent_Streamable.md#createstatestore)
- [identity](concurrent_Streamable.md#identity)
- [syncState](concurrent_Streamable.md#syncstate)

## Type Aliases

### Signature

Ƭ **Signature**: [`StreamableModule`](../interfaces/concurrent_Streamable.StreamableModule.md)

## Functions

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)<`TReq`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TReq`, `T`\>\>

___

### createAnimationGroupEventHandler

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`TKey`, [`Function1`](functions.md#function1)<`TEvent`, [`Animation`](concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`TKey`, [`Function1`](functions.md#function1)<`TEvent`, [`Animation`](concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`TKey`, [`Function1`](functions.md#function1)<`TEvent`, [`Animation`](concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`TKey`, [`Animation`](concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`TKey`, [`Animation`](concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`TKey`, [`Animation`](concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>\>

___

### createEventHandler

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`unknown`\>\> |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TEventType`, `boolean`\>\>

___

### createInMemoryCache

▸ **createInMemoryCache**<`T`\>(`options?`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`, [`CacheLike`](../interfaces/concurrent.CacheLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`, [`CacheLike`](../interfaces/concurrent.CacheLike.md)<`T`\>\>

___

### createPersistentCache

▸ **createPersistentCache**<`T`\>(`persistentStore`, `options?`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`, [`CacheLike`](../interfaces/concurrent.CacheLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `persistentStore` | `Object` |
| `persistentStore.load` | (`keys`: `ReadonlySet`<`string`\>) => [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`Readonly`<`Record`<`string`, [`Optional`](functions.md#optional)<`T`\>\>\>\> |
| `persistentStore.store` | (`updates`: `Readonly`<`Record`<`string`, `T`\>\>) => [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`void`\> |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)<`string`, [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>\>, `never`, [`CacheLike`](../interfaces/concurrent.CacheLike.md)<`T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

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

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`T`, `T`\>\>

___

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>, [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | [`Function1`](functions.md#function1)<`T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\>\> |
| `onChange` | [`Function2`](functions.md#function2)<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\>\> |
| `options?` | `Object` |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>, [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>\>
