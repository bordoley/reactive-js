[Reactive-JS](../README.md) / PauseableObservable

# Module: PauseableObservable

## Table of contents

### Container Interfaces

- [PauseableObservableContainer](../interfaces/PauseableObservable.PauseableObservableContainer.md)

### Module Interfaces

- [PauseableObservableModule](../interfaces/PauseableObservable.PauseableObservableModule.md)

### Type Aliases

- [Signature](PauseableObservable.md#signature)
- [Type](PauseableObservable.md#type)

### Operator Functions

- [buffer](PauseableObservable.md#buffer)
- [distinctUntilChanged](PauseableObservable.md#distinctuntilchanged)
- [keep](PauseableObservable.md#keep)
- [map](PauseableObservable.md#map)
- [pairwise](PauseableObservable.md#pairwise)
- [scan](PauseableObservable.md#scan)
- [skipFirst](PauseableObservable.md#skipfirst)
- [takeFirst](PauseableObservable.md#takefirst)
- [takeLast](PauseableObservable.md#takelast)
- [takeWhile](PauseableObservable.md#takewhile)

### Other Functions

- [sinkInto](PauseableObservable.md#sinkinto)

## Type Aliases

### Signature

Ƭ **Signature**: [`PauseableObservableModule`](../interfaces/PauseableObservable.PauseableObservableModule.md)

___

### Type

Ƭ **Type**: [`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md)

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, readonly `T`[], `number`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, readonly `T`[], `number`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `TKey`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `TKey`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`, `TKey`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`, `TKey`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>, `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>, `number`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `TAcc`, `number`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `TAcc`, `number`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/PauseableObservable.PauseableObservableContainer.md), `T`, `T`, `number`\>

___

## Other Functions

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`void`\>\>
