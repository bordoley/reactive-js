[Reactive-JS](../README.md) / Streamable

# Module: Streamable

## Table of contents

### Interfaces

- [StreamableModule](../interfaces/Streamable.StreamableModule.md)

### Type Aliases

- [Signature](Streamable.md#signature)

### Constructor Functions

- [create](Streamable.md#create)
- [createStateStore](Streamable.md#createstatestore)
- [identity](Streamable.md#identity)

### Other Functions

- [createAnimationGroupEventHandler](Streamable.md#createanimationgroupeventhandler)
- [createEventHandler](Streamable.md#createeventhandler)
- [createInMemoryCache](Streamable.md#createinmemorycache)
- [createPersistentCache](Streamable.md#createpersistentcache)

## Type Aliases

### Signature

Ƭ **Signature**: [`StreamableModule`](../interfaces/Streamable.StreamableModule.md)

## Constructor Functions

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TReq`, `T`\> |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TReq`, `T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

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

[`StreamableLike`](../interfaces/types.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`T`, `T`\>\>

___

## Other Functions

### createAnimationGroupEventHandler

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, [`Function1`](functions.md#function1)<`TEvent`, [`Animation`](Observable.md#animation)<`T`\> \| readonly [`Animation`](Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, [`Function1`](functions.md#function1)<`TEvent`, [`Animation`](Observable.md#animation)<`T`\> \| readonly [`Animation`](Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TEvent`, `TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, [`Function1`](functions.md#function1)<`TEvent`, [`Animation`](Observable.md#animation)<`T`\> \| readonly [`Animation`](Observable.md#animation)<`T`\>[]\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEvent`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, [`Animation`](Observable.md#animation)<`T`\> \| readonly [`Animation`](Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, [`Animation`](Observable.md#animation)<`T`\> \| readonly [`Animation`](Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **createAnimationGroupEventHandler**<`TKey`, `T`\>(`animationGroup`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `string` \| `number` \| `symbol` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, [`Animation`](Observable.md#animation)<`T`\> \| readonly [`Animation`](Observable.md#animation)<`T`\>[]\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |
| `options.scheduler?` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`void`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`void`, `boolean`\> & [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### createEventHandler

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"switching"`` |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.mode` | ``"blocking"`` |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`, `options`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`unknown`\>\> |
| `options` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.mode` | ``"queueing"`` |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEventType`, `boolean`\>\>

▸ **createEventHandler**<`TEventType`\>(`op`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEventType`, `boolean`\>\>

#### Type parameters

| Name |
| :------ |
| `TEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TEventType`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`unknown`\>\> |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TEventType`, `boolean`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TEventType`, `boolean`\>\>

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
| `options.cleanupScheduler?` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

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
| `persistentStore.load` | (`keys`: `ReadonlySet`<`string`\>) => [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`Readonly`<`Record`<`string`, [`Optional`](functions.md#optional)<`T`\>\>\>\> |
| `persistentStore.store` | (`updates`: `Readonly`<`Record`<`string`, `T`\>\>) => [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`void`\> |
| `options?` | `Object` |
| `options.capacity?` | `number` |
| `options.cleanupScheduler?` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |

#### Returns

`CacheLike`<`T`\>
