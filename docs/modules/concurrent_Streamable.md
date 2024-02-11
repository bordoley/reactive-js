[Reactive-JS](../README.md) / concurrent/Streamable

# Module: concurrent/Streamable

## Table of contents

### Interfaces

- [StreamableModule](../interfaces/concurrent_Streamable.StreamableModule.md)

### Type Aliases

- [Signature](concurrent_Streamable.md#signature)

### Functions

- [actionReducer](concurrent_Streamable.md#actionreducer)
- [animationGroupEventHandler](concurrent_Streamable.md#animationgroupeventhandler)
- [create](concurrent_Streamable.md#create)
- [eventHandler](concurrent_Streamable.md#eventhandler)
- [identity](concurrent_Streamable.md#identity)
- [inMemoryCache](concurrent_Streamable.md#inmemorycache)
- [persistentCache](concurrent_Streamable.md#persistentcache)
- [stateStore](concurrent_Streamable.md#statestore)
- [syncState](concurrent_Streamable.md#syncstate)

## Type Aliases

### Signature

Ƭ **Signature**: [`StreamableModule`](../interfaces/concurrent_Streamable.StreamableModule.md)

## Functions

### actionReducer

▸ **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options?`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TAction`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TAction`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TAction` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)\<`TAction`, `T`\> |
| `initialState` | [`Factory`](functions.md#factory)\<`T`\> |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)\<`T`\> |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TAction`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TAction`, `T`\>\>

___

### animationGroupEventHandler

▸ **animationGroupEventHandler**\<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`TKey`, [`Function1`](functions.md#function1)\<`TEvent`, [`Animation`](concurrent_Observable.md#animation)\<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)\<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

▸ **animationGroupEventHandler**\<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`TKey`, [`Function1`](functions.md#function1)\<`TEvent`, [`Animation`](concurrent_Observable.md#animation)\<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)\<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

▸ **animationGroupEventHandler**\<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`TKey`, [`Function1`](functions.md#function1)\<`TEvent`, [`Animation`](concurrent_Observable.md#animation)\<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)\<`T`\>[]\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

▸ **animationGroupEventHandler**\<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`TKey`, [`Animation`](concurrent_Observable.md#animation)\<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)\<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

▸ **animationGroupEventHandler**\<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`TKey`, [`Animation`](concurrent_Observable.md#animation)\<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)\<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

▸ **animationGroupEventHandler**\<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`TKey`, [`Animation`](concurrent_Observable.md#animation)\<`T`\> \| readonly [`Animation`](concurrent_Observable.md#animation)\<`T`\>[]\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`void`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

___

### create

▸ **create**\<`TReq`, `T`\>(`op`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TReq`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)\<[`PureDeferredObservableLike`](../interfaces/concurrent.PureDeferredObservableLike.md)\<`TReq`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`T`\>\> |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TReq`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TReq`, `T`\>\>

___

### eventHandler

▸ **eventHandler**\<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)\<`TEventType`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

▸ **eventHandler**\<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)\<`TEventType`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

▸ **eventHandler**\<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)\<`TEventType`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`unknown`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

▸ **eventHandler**\<`TEventType`\>(`op`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)\<`TEventType`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`unknown`\>\> |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

___

### identity

▸ **identity**\<`T`\>(): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`T`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<`T`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`T`, `T`\>\>

___

### inMemoryCache

▸ **inMemoryCache**\<`T`\>(`options?`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](functions.md#function1)\<[`Optional`](functions.md#optional)\<`T`\>, [`Optional`](functions.md#optional)\<`T`\>\>\>, `never`, [`CacheLike`](../interfaces/concurrent.CacheLike.md)\<`T`\>\>

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

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](functions.md#function1)\<[`Optional`](functions.md#optional)\<`T`\>, [`Optional`](functions.md#optional)\<`T`\>\>\>, `never`, [`CacheLike`](../interfaces/concurrent.CacheLike.md)\<`T`\>\>

___

### persistentCache

▸ **persistentCache**\<`T`\>(`persistentStore`, `options?`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](functions.md#function1)\<[`Optional`](functions.md#optional)\<`T`\>, [`Optional`](functions.md#optional)\<`T`\>\>\>, `never`, [`CacheLike`](../interfaces/concurrent.CacheLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `persistentStore` | `Object` |
| `persistentStore.load` | (`keys`: `ReadonlySet`\<`string`\>) => [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`Readonly`\<`Record`\<`string`, [`Optional`](functions.md#optional)\<`T`\>\>\>\> |
| `persistentStore.store` | (`updates`: `Readonly`\<`Record`\<`string`, `T`\>\>) => [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<`void`\> |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](functions.md#function1)\<[`Optional`](functions.md#optional)\<`T`\>, [`Optional`](functions.md#optional)\<`T`\>\>\>, `never`, [`CacheLike`](../interfaces/concurrent.CacheLike.md)\<`T`\>\>

___

### stateStore

▸ **stateStore**\<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`\>\>

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
| `initialState` | [`Factory`](functions.md#factory)\<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](functions.md#equality)\<`T`\> | - |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`\>\>

___

### syncState

▸ **syncState**\<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](functions.md#function1)\<[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`\>\>, [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | [`Function1`](functions.md#function1)\<`T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<[`Updater`](functions.md#updater)\<`T`\>\>\> |
| `onChange` | [`Function2`](functions.md#function2)\<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)\<[`Updater`](functions.md#updater)\<`T`\>\>\> |
| `options?` | `Object` |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](functions.md#function1)\<[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`\>\>, [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<[`Updater`](functions.md#updater)\<`T`\>, `T`\>\>\>
