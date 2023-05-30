[Reactive-JS](../README.md) / EventSource

# Module: EventSource

## Table of contents

### Container Interfaces

- [EventSourceContainer](../interfaces/EventSource.EventSourceContainer.md)

### Module Interfaces

- [EventSourceModule](../interfaces/EventSource.EventSourceModule.md)

### Type Aliases

- [Signature](EventSource.md#signature)
- [Type](EventSource.md#type)

### Constructor Functions

- [create](EventSource.md#create)
- [createPublisher](EventSource.md#createpublisher)
- [createRefCountedPublisher](EventSource.md#createrefcountedpublisher)
- [merge](EventSource.md#merge)
- [mergeMany](EventSource.md#mergemany)

### Operator Functions

- [buffer](EventSource.md#buffer)
- [distinctUntilChanged](EventSource.md#distinctuntilchanged)
- [keep](EventSource.md#keep)
- [map](EventSource.md#map)
- [pairwise](EventSource.md#pairwise)
- [scan](EventSource.md#scan)
- [skipFirst](EventSource.md#skipfirst)
- [takeFirst](EventSource.md#takefirst)
- [takeLast](EventSource.md#takelast)
- [takeWhile](EventSource.md#takewhile)

### Other Functions

- [addEventHandler](EventSource.md#addeventhandler)
- [toObservable](EventSource.md#toobservable)

### Transform Functions

- [toEventSource](EventSource.md#toeventsource)
- [toReadonlyArrayAsync](EventSource.md#toreadonlyarrayasync)

## Type Aliases

### Signature

Ƭ **Signature**: [`EventSourceModule`](../interfaces/EventSource.EventSourceModule.md)

___

### Type

Ƭ **Type**: [`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md)

## Constructor Functions

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](functions.md#sideeffect1)<[`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>

___

### createPublisher

▸ **createPublisher**<`T`\>(): [`EventPublisherLike`](../interfaces/types.EventPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EventPublisherLike`](../interfaces/types.EventPublisherLike.md)<`T`\>

___

### createRefCountedPublisher

▸ **createRefCountedPublisher**<`T`\>(): [`EventPublisherLike`](../interfaces/types.EventPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EventPublisherLike`](../interfaces/types.EventPublisherLike.md)<`T`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\> |
| `snd` | [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`eventSources`): [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSources` | readonly [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, readonly `T`[], `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, readonly `T`[], `number`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

Returns a ContainerOperator that emits all items emitted by the source that
are distinct by comparison from the previous item.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `TKey`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `TA`, `TB`, `TKey`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>, `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>, `number`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `TAcc`, `number`\>

Returns a Container that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `TAcc`, `number`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

Returns a Container that skips the first count items emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

Returns a Container that only emits the first `count` values emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

Returns a Container that only emits the last `count` items emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

Returns a Container which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EventSourceContainer`](../interfaces/EventSource.EventSourceContainer.md), `T`, `T`, `number`\>

___

## Other Functions

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

___

## Transform Functions

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>
