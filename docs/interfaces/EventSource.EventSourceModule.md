[Reactive-JS](../README.md) / [EventSource](../modules/EventSource.md) / EventSourceModule

# Interface: EventSourceModule

[EventSource](../modules/EventSource.md).EventSourceModule

## Hierarchy

- [`ContainerTypeClass`](types.ContainerTypeClass.md)<[`Type`](../modules/EventSource.md#type)\>

- [`MulticastableTypeClass`](types.MulticastableTypeClass.md)<[`Type`](../modules/EventSource.md#type)\>

  ↳ **`EventSourceModule`**

## Table of contents

### Constructor Methods

- [create](EventSource.EventSourceModule.md#create)
- [createPublisher](EventSource.EventSourceModule.md#createpublisher)
- [createRefCountedPublisher](EventSource.EventSourceModule.md#createrefcountedpublisher)

### Operator Methods

- [buffer](EventSource.EventSourceModule.md#buffer)
- [distinctUntilChanged](EventSource.EventSourceModule.md#distinctuntilchanged)
- [forEach](EventSource.EventSourceModule.md#foreach)
- [ignoreElements](EventSource.EventSourceModule.md#ignoreelements)
- [keep](EventSource.EventSourceModule.md#keep)
- [keepType](EventSource.EventSourceModule.md#keeptype)
- [map](EventSource.EventSourceModule.md#map)
- [mapTo](EventSource.EventSourceModule.md#mapto)
- [pairwise](EventSource.EventSourceModule.md#pairwise)
- [pick](EventSource.EventSourceModule.md#pick)
- [scan](EventSource.EventSourceModule.md#scan)
- [skipFirst](EventSource.EventSourceModule.md#skipfirst)
- [takeFirst](EventSource.EventSourceModule.md#takefirst)
- [takeWhile](EventSource.EventSourceModule.md#takewhile)

### Other Methods

- [addEventHandler](EventSource.EventSourceModule.md#addeventhandler)
- [merge](EventSource.EventSourceModule.md#merge)
- [mergeMany](EventSource.EventSourceModule.md#mergemany)

### Transform Methods

- [toEventSource](EventSource.EventSourceModule.md#toeventsource)
- [toObservable](EventSource.EventSourceModule.md#toobservable)

## Constructor Methods

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`EventListenerLike`](types.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<`T`\>

___

### createPublisher

▸ **createPublisher**<`T`\>(): [`EventPublisherLike`](types.EventPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EventPublisherLike`](types.EventPublisherLike.md)<`T`\>

___

### createRefCountedPublisher

▸ **createRefCountedPublisher**<`T`\>(): [`EventPublisherLike`](types.EventPublisherLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EventPublisherLike`](types.EventPublisherLike.md)<`T`\>

___

## Operator Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, readonly `T`[]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[buffer](types.ContainerTypeClass.md#buffer)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

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
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[distinctUntilChanged](types.ContainerTypeClass.md#distinctuntilchanged)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[forEach](types.ContainerTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `unknown`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[ignoreElements](types.ContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[keep](types.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[keepType](types.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[map](types.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[mapTo](types.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pairwise](types.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`[`TKey`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `TAcc`\>

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
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[scan](types.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[skipFirst](types.ContainerTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[takeFirst](types.ContainerTypeClass.md#takefirst)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

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
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EventSourceContainer`](EventSource.EventSourceContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[takeWhile](types.ContainerTypeClass.md#takewhile)

___

## Other Methods

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[addEventHandler](types.MulticastableTypeClass.md#addeventhandler)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EventSourceLike`](types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EventSourceLike`](types.EventSourceLike.md)<`T`\> |
| `snd` | [`EventSourceLike`](types.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](types.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`eventSources`): [`EventSourceLike`](types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSources` | readonly [`EventSourceLike`](types.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<`T`\>

___

## Transform Methods

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[toEventSource](types.MulticastableTypeClass.md#toeventsource)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Inherited from

[MulticastableTypeClass](types.MulticastableTypeClass.md).[toObservable](types.MulticastableTypeClass.md#toobservable)
