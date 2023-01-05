[Reactive-JS](../README.md) / ix/AsyncEnumerableLike

# Module: ix/AsyncEnumerableLike

## Table of contents

### Variables

- [fromArrayT](ix_AsyncEnumerableLike.md#fromarrayt)
- [generateT](ix_AsyncEnumerableLike.md#generatet)
- [keepT](ix_AsyncEnumerableLike.md#keept)
- [mapT](ix_AsyncEnumerableLike.md#mapt)
- [scanAsyncT](ix_AsyncEnumerableLike.md#scanasynct)
- [scanT](ix_AsyncEnumerableLike.md#scant)
- [takeWhileT](ix_AsyncEnumerableLike.md#takewhilet)
- [toObservableT](ix_AsyncEnumerableLike.md#toobservablet)
- [toReadonlyArrayT](ix_AsyncEnumerableLike.md#toreadonlyarrayt)

### Functions

- [fromArray](ix_AsyncEnumerableLike.md#fromarray)
- [fromEnumerable](ix_AsyncEnumerableLike.md#fromenumerable)
- [generate](ix_AsyncEnumerableLike.md#generate)
- [keep](ix_AsyncEnumerableLike.md#keep)
- [map](ix_AsyncEnumerableLike.md#map)
- [scan](ix_AsyncEnumerableLike.md#scan)
- [scanAsync](ix_AsyncEnumerableLike.md#scanasync)
- [takeWhile](ix_AsyncEnumerableLike.md#takewhile)
- [toObservable](ix_AsyncEnumerableLike.md#toobservable)
- [toReadonlyArray](ix_AsyncEnumerableLike.md#toreadonlyarray)

## Variables

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](containers.md#fromarray)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

___

### generateT

• `Const` **generateT**: [`Generate`](containers.md#generate)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md), { `delay`: `number`  }\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

___

### scanAsyncT

• `Const` **scanAsyncT**: [`ScanAsync`](rx.md#scanasync)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers.md#takewhile)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

___

### toObservableT

• `Const` **toObservableT**: [`ToObservable`](rx.md#toobservable)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

## Functions

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`FromArrayOptions`](containers.md#fromarrayoptions)\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>

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
| `options?` | `Partial`<{ `delay`: `number`  }\> | - |

#### Returns

[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`unknown`\>, `T`, `T`\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>
