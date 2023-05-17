[Reactive-JS](../README.md) / [PauseableObservable](../modules/PauseableObservable.md) / PauseableObservableModule

# Interface: PauseableObservableModule

[PauseableObservable](../modules/PauseableObservable.md).PauseableObservableModule

## Hierarchy

- [`ContainerTypeClass`](types.ContainerTypeClass.md)<[`Type`](../modules/PauseableObservable.md#type)\>

  ↳ **`PauseableObservableModule`**

## Table of contents

### Operator Methods

- [buffer](PauseableObservable.PauseableObservableModule.md#buffer)
- [distinctUntilChanged](PauseableObservable.PauseableObservableModule.md#distinctuntilchanged)
- [flatMapIterable](PauseableObservable.PauseableObservableModule.md#flatmapiterable)
- [forEach](PauseableObservable.PauseableObservableModule.md#foreach)
- [ignoreElements](PauseableObservable.PauseableObservableModule.md#ignoreelements)
- [keep](PauseableObservable.PauseableObservableModule.md#keep)
- [keepType](PauseableObservable.PauseableObservableModule.md#keeptype)
- [map](PauseableObservable.PauseableObservableModule.md#map)
- [mapTo](PauseableObservable.PauseableObservableModule.md#mapto)
- [pairwise](PauseableObservable.PauseableObservableModule.md#pairwise)
- [pick](PauseableObservable.PauseableObservableModule.md#pick)
- [scan](PauseableObservable.PauseableObservableModule.md#scan)
- [skipFirst](PauseableObservable.PauseableObservableModule.md#skipfirst)
- [takeFirst](PauseableObservable.PauseableObservableModule.md#takefirst)
- [takeWhile](PauseableObservable.PauseableObservableModule.md#takewhile)

### Other Methods

- [dispatchTo](PauseableObservable.PauseableObservableModule.md#dispatchto)
- [enqueue](PauseableObservable.PauseableObservableModule.md#enqueue)
- [sinkInto](PauseableObservable.PauseableObservableModule.md#sinkinto)
- [takeLast](PauseableObservable.PauseableObservableModule.md#takelast)

## Operator Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, readonly `T`[]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[buffer](types.ContainerTypeClass.md#buffer)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[distinctUntilChanged](types.ContainerTypeClass.md#distinctuntilchanged)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[forEach](types.ContainerTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `unknown`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[ignoreElements](types.ContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[keep](types.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[keepType](types.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[map](types.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[mapTo](types.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pairwise](types.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[scan](types.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[skipFirst](types.ContainerTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[takeFirst](types.ContainerTypeClass.md#takefirst)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[takeWhile](types.ContainerTypeClass.md#takewhile)

___

## Other Methods

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

___

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`void`\>\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>
