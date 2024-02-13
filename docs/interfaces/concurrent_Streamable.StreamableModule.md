[Reactive-JS](../README.md) / [concurrent/Streamable](../modules/concurrent_Streamable.md) / StreamableModule

# Interface: StreamableModule

[concurrent/Streamable](../modules/concurrent_Streamable.md).StreamableModule

## Table of contents

### Methods

- [actionReducer](concurrent_Streamable.StreamableModule.md#actionreducer)
- [animationGroup](concurrent_Streamable.StreamableModule.md#animationgroup)
- [create](concurrent_Streamable.StreamableModule.md#create)
- [eventHandler](concurrent_Streamable.StreamableModule.md#eventhandler)
- [identity](concurrent_Streamable.StreamableModule.md#identity)
- [inMemoryCache](concurrent_Streamable.StreamableModule.md#inmemorycache)
- [persistentCache](concurrent_Streamable.StreamableModule.md#persistentcache)
- [stateStore](concurrent_Streamable.StreamableModule.md#statestore)
- [syncState](concurrent_Streamable.StreamableModule.md#syncstate)

## Methods

### actionReducer

▸ **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options?`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TAction`, `T`, [`StreamLike`](concurrent.StreamLike.md)\<`TAction`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TAction` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)\<`TAction`, `T`\> |
| `initialState` | [`Factory`](../modules/functions.md#factory)\<`T`\> |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)\<`T`\> |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TAction`, `T`, [`StreamLike`](concurrent.StreamLike.md)\<`TAction`, `T`\>\>

___

### animationGroup

▸ **animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TEvent` | `unknown` |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)\<`TKey`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)\<`T`\> \| [`Function1`](../modules/functions.md#function1)\<`TEvent`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)\<`T`\>\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>\>

▸ **animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TEvent` | `unknown` |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)\<`TKey`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)\<`T`\> \| [`Function1`](../modules/functions.md#function1)\<`TEvent`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)\<`T`\>\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>\>

▸ **animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TEvent` | `unknown` |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)\<`TKey`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)\<`T`\> \| [`Function1`](../modules/functions.md#function1)\<`TEvent`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)\<`T`\>\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](../modules/utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>\>

___

### create

▸ **create**\<`TReq`, `T`\>(`op`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TReq`, `T`, [`StreamLike`](concurrent.StreamLike.md)\<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)\<[`PureDeferredObservableLike`](concurrent.PureDeferredObservableLike.md)\<`TReq`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<`T`\>\> |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TReq`, `T`, [`StreamLike`](concurrent.StreamLike.md)\<`TReq`, `T`\>\>

___

### eventHandler

▸ **eventHandler**\<`TEventType`\>(`op`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)\<`TEventType`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

▸ **eventHandler**\<`TEventType`\>(`op`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)\<`TEventType`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

▸ **eventHandler**\<`TEventType`\>(`op`, `options`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)\<`TEventType`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<`unknown`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | [`BackpressureStrategy`](../modules/utils.md#backpressurestrategy) |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

▸ **eventHandler**\<`TEventType`\>(`op`): [`StreamableLike`](concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)\<`TEventType`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<`unknown`\>\> |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](concurrent.StreamLike.md)\<`TEventType`, `boolean`\>\>

___

### identity

▸ **identity**\<`T`\>(): [`StreamableLike`](concurrent.StreamableLike.md)\<`T`, `T`, [`StreamLike`](concurrent.StreamLike.md)\<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<`T`, `T`, [`StreamLike`](concurrent.StreamLike.md)\<`T`, `T`\>\>

___

### inMemoryCache

▸ **inMemoryCache**\<`T`\>(`options?`): [`StreamableLike`](concurrent.StreamableLike.md)\<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](../modules/functions.md#function1)\<[`Optional`](../modules/functions.md#optional)\<`T`\>, [`Optional`](../modules/functions.md#optional)\<`T`\>\>\>, `never`, [`CacheLike`](concurrent.CacheLike.md)\<`T`\>\>

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

[`StreamableLike`](concurrent.StreamableLike.md)\<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](../modules/functions.md#function1)\<[`Optional`](../modules/functions.md#optional)\<`T`\>, [`Optional`](../modules/functions.md#optional)\<`T`\>\>\>, `never`, [`CacheLike`](concurrent.CacheLike.md)\<`T`\>\>

___

### persistentCache

▸ **persistentCache**\<`T`\>(`persistentStore`, `options?`): [`StreamableLike`](concurrent.StreamableLike.md)\<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](../modules/functions.md#function1)\<[`Optional`](../modules/functions.md#optional)\<`T`\>, [`Optional`](../modules/functions.md#optional)\<`T`\>\>\>, `never`, [`CacheLike`](concurrent.CacheLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `persistentStore` | `Object` |
| `persistentStore.load` | (`keys`: `ReadonlySet`\<`string`\>) => [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<`Readonly`\<`Record`\<`string`, [`Optional`](../modules/functions.md#optional)\<`T`\>\>\>\> |
| `persistentStore.store` | (`updates`: `Readonly`\<`Record`\<`string`, `T`\>\>) => [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<`void`\> |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](concurrent.SchedulerLike.md) |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<[`ReadonlyObjectMapLike`](../modules/collections.md#readonlyobjectmaplike)\<`string`, [`Function1`](../modules/functions.md#function1)\<[`Optional`](../modules/functions.md#optional)\<`T`\>, [`Optional`](../modules/functions.md#optional)\<`T`\>\>\>, `never`, [`CacheLike`](concurrent.CacheLike.md)\<`T`\>\>

___

### stateStore

▸ **stateStore**\<`T`\>(`initialState`, `options?`): [`StreamableLike`](concurrent.StreamableLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`\>\>

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
| `initialState` | [`Factory`](../modules/functions.md#factory)\<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)\<`T`\> | - |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`\>\>

___

### syncState

▸ **syncState**\<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](../modules/functions.md#function1)\<[`StreamableLike`](concurrent.StreamableLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`\>\>, [`StreamableLike`](concurrent.StreamableLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | [`Function1`](../modules/functions.md#function1)\<`T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>\>\> |
| `onChange` | [`Function2`](../modules/functions.md#function2)\<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>\>\> |
| `options?` | `Object` |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`StreamableLike`](concurrent.StreamableLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`\>\>, [`StreamableLike`](concurrent.StreamableLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)\<[`Updater`](../modules/functions.md#updater)\<`T`\>, `T`\>\>\>
