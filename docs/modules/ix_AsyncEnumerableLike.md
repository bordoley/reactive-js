[Reactive-JS](../README.md) / ix/AsyncEnumerableLike

# Module: ix/AsyncEnumerableLike

## Table of contents

### Variables

- [keepT](ix_AsyncEnumerableLike.md#keept)
- [toObservableT](ix_AsyncEnumerableLike.md#toobservablet)
- [toReadonlyArrayT](ix_AsyncEnumerableLike.md#toreadonlyarrayt)

### Functions

- [fromArray](ix_AsyncEnumerableLike.md#fromarray)
- [keep](ix_AsyncEnumerableLike.md#keep)
- [toObservable](ix_AsyncEnumerableLike.md#toobservable)
- [toReadonlyArray](ix_AsyncEnumerableLike.md#toreadonlyarray)

## Variables

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

___

### toObservableT

• `Const` **toObservableT**: [`ToObservable`](rx.md#toobservable)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)\>

## Functions

### fromArray

▸ **fromArray**<`T`\>(`_?`): [`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_?` | `Partial`<[`FromArrayOptions`](containers.md#fromarrayoptions)\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>

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
