[Reactive-JS](../README.md) / asyncEnumerable

# Module: asyncEnumerable

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)

### Type Aliases

- [AsyncEnumerableOperator](asyncEnumerable.md#asyncenumerableoperator)
- [ConsumeContinue](asyncEnumerable.md#consumecontinue)
- [ConsumeDone](asyncEnumerable.md#consumedone)

### Variables

- [fromArrayT](asyncEnumerable.md#fromarrayt)
- [keepT](asyncEnumerable.md#keept)
- [mapT](asyncEnumerable.md#mapt)
- [scanT](asyncEnumerable.md#scant)
- [takeWhileT](asyncEnumerable.md#takewhilet)
- [toObservableT](asyncEnumerable.md#toobservablet)
- [type](asyncEnumerable.md#type)

### Functions

- [consumeAsync](asyncEnumerable.md#consumeasync)
- [consumeContinue](asyncEnumerable.md#consumecontinue-1)
- [consumeDone](asyncEnumerable.md#consumedone-1)
- [fromArray](asyncEnumerable.md#fromarray)
- [fromEnumerable](asyncEnumerable.md#fromenumerable)
- [fromIterable](asyncEnumerable.md#fromiterable)
- [generate](asyncEnumerable.md#generate)
- [keep](asyncEnumerable.md#keep)
- [map](asyncEnumerable.md#map)
- [scan](asyncEnumerable.md#scan)
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

___

### ConsumeContinue

Ƭ **ConsumeContinue**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"continue"`` |

___

### ConsumeDone

Ƭ **ConsumeDone**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"done"`` |

## Variables

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### mapT

• `Const` **mapT**: [`Map`](../interfaces/container.Map.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

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

### consumeAsync

▸ **consumeAsync**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](asyncEnumerable.md#consumedone)<`TAcc`\>\>\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeContinue

▸ **consumeContinue**<`T`\>(`data`): [`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`T`\>

___

### consumeDone

▸ **consumeDone**<`T`\>(`data`): [`ConsumeDone`](asyncEnumerable.md#consumedone)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeDone`](asyncEnumerable.md#consumedone)<`T`\>

___

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
