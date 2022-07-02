[Reactive-JS](../README.md) / asyncEnumerable

# Module: asyncEnumerable

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)

### Type Aliases

- [AsyncEnumerableOperator](asyncEnumerable.md#asyncenumerableoperator)

### Variables

- [fromArrayT](asyncEnumerable.md#fromarrayt)
- [fromEnumerableT](asyncEnumerable.md#fromenumerablet)
- [fromIterableT](asyncEnumerable.md#fromiterablet)
- [keepT](asyncEnumerable.md#keept)
- [mapT](asyncEnumerable.md#mapt)
- [scanAsyncT](asyncEnumerable.md#scanasynct)
- [scanT](asyncEnumerable.md#scant)
- [takeWhileT](asyncEnumerable.md#takewhilet)
- [toObservableT](asyncEnumerable.md#toobservablet)
- [type](asyncEnumerable.md#type)

### Functions

- [fromArray](asyncEnumerable.md#fromarray)
- [fromEnumerable](asyncEnumerable.md#fromenumerable)
- [fromIterable](asyncEnumerable.md#fromiterable)
- [generate](asyncEnumerable.md#generate)
- [keep](asyncEnumerable.md#keep)
- [map](asyncEnumerable.md#map)
- [scan](asyncEnumerable.md#scan)
- [scanAsync](asyncEnumerable.md#scanasync)
- [takeWhile](asyncEnumerable.md#takewhile)
- [toObservable](asyncEnumerable.md#toobservable)

## Type Aliases

### AsyncEnumerableOperator

Ƭ **AsyncEnumerableOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`TA`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Variables

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### fromEnumerableT

• `Const` **fromEnumerableT**: [`FromEnumerable`](../interfaces/enumerable.FromEnumerable.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### fromIterableT

• `Const` **fromIterableT**: [`FromIterable`](../interfaces/container.FromIterable.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### mapT

• `Const` **mapT**: [`Map`](../interfaces/container.Map.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### scanAsyncT

• `Const` **scanAsyncT**: [`ScanAsync`](../interfaces/observable.ScanAsync.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### scanT

• `Const` **scanT**: [`Scan`](../interfaces/container.Scan.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](../interfaces/container.TakeWhile.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### toObservableT

• `Const` **toObservableT**: [`ToObservable`](../interfaces/observable.ToObservable.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### type

• `Const` **type**: [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>

## Functions

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `delay`: `number` ; `endIndex`: `number` ; `startIndex`: `number`  }\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`TA`, `TB`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`AsyncReducer`](observable.md#asyncreducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `TAcc`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `T`\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>
