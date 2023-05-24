[Reactive-JS](../README.md) / [Streamable](../modules/Streamable.md) / StreamableModule

# Interface: StreamableModule

[Streamable](../modules/Streamable.md).StreamableModule

## Table of contents

### Constructor Methods

- [create](Streamable.StreamableModule.md#create)
- [createStateStore](Streamable.StreamableModule.md#createstatestore)
- [identity](Streamable.StreamableModule.md#identity)

### Other Methods

- [createAnimationGroupEventHandler](Streamable.StreamableModule.md#createanimationgroupeventhandler)
- [createEventHandler](Streamable.StreamableModule.md#createeventhandler)
- [createInMemoryCache](Streamable.StreamableModule.md#createinmemorycache)
- [createPersistentCache](Streamable.StreamableModule.md#createpersistentcache)

## Constructor Methods

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](types.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<[`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`TReq`\>, [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`T`\>\> |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](types.StreamLike.md)<`TReq`, `T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](types.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](types.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>

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

[`StreamableLike`](types.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](types.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](types.StreamableLike.md)<`T`, `T`, [`StreamLike`](types.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`T`, `T`, [`StreamLike`](types.StreamLike.md)<`T`, `T`\>\>

___

## Other Methods

### createAnimationGroupEventHandler

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, [`Function1`](../modules/functions.md#function1)<`TEvent`, [`Animation`](../modules/Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, [`Function1`](../modules/functions.md#function1)<`TEvent`, [`Animation`](../modules/Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, [`Function1`](../modules/functions.md#function1)<`TEvent`, [`Animation`](../modules/Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, [`Animation`](../modules/Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, [`Animation`](../modules/Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, [`Animation`](../modules/Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### createEventHandler

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<`TEventType`, [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<`TEventType`, [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<`TEventType`, [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`): [`StreamableLike`](types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<`TEventType`, [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`unknown`\>\> |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](types.StreamLike.md)<`TEventType`, `boolean`\>\>

___

### createInMemoryCache

▸ **createInMemoryCache**<`T`\>(`options?`): `CacheLike`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

`CacheLike`<`T`\>

___

### createPersistentCache

▸ **createPersistentCache**<`T`\>(`persistentStore`, `options?`): `CacheLike`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `persistentStore` | `Object` |
| `persistentStore.load` | (`keys`: `ReadonlySet`<`string`\>) => [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`Readonly`<`Record`<`string`, [`Optional`](../modules/functions.md#optional)<`T`\>\>\>\> |
| `persistentStore.store` | (`updates`: `Readonly`<`Record`<`string`, `T`\>\>) => [`DeferredObservableBaseLike`](types.DeferredObservableBaseLike.md)<`void`\> |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](types.SchedulerLike.md) |

#### Returns

`CacheLike`<`T`\>
