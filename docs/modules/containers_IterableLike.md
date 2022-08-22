[Reactive-JS](../README.md) / containers/IterableLike

# Module: containers/IterableLike

## Table of contents

### Variables

- [toAsyncEnumerableT](containers_IterableLike.md#toasyncenumerablet)
- [toEnumerableT](containers_IterableLike.md#toenumerablet)
- [toIterableT](containers_IterableLike.md#toiterablet)
- [toObservableT](containers_IterableLike.md#toobservablet)

### Functions

- [toAsyncEnumerable](containers_IterableLike.md#toasyncenumerable)
- [toEnumerable](containers_IterableLike.md#toenumerable)
- [toIterable](containers_IterableLike.md#toiterable)
- [toObservable](containers_IterableLike.md#toobservable)

## Variables

### toAsyncEnumerableT

• `Const` **toAsyncEnumerableT**: [`ToAsyncEnumerable`](ix.md#toasyncenumerable)<[`IterableLike`](../interfaces/containers.IterableLike.md)\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](ix.md#toenumerable)<[`IterableLike`](../interfaces/containers.IterableLike.md)\>

___

### toIterableT

• `Const` **toIterableT**: [`ToIterable`](containers.md#toiterable)<[`IterableLike`](../interfaces/containers.IterableLike.md)\>

___

### toObservableT

• `Const` **toObservableT**: [`ToObservable`](rx.md#toobservable)<[`IterableLike`](../interfaces/containers.IterableLike.md), { `delay`: `number` ; `delayStart`: `boolean`  }\>

## Functions

### toAsyncEnumerable

▸ **toAsyncEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>
