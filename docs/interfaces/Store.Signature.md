[Reactive-JS](../README.md) / [Store](../modules/Store.md) / Signature

# Interface: Signature

[Store](../modules/Store.md).Signature

## Table of contents

### Methods

- [create](Store.Signature.md#create)
- [toObservable](Store.Signature.md#toobservable)

## Methods

### create

▸ **create**<`T`\>(`initialValue`): [`WritableStoreLike`](types.WritableStoreLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[`WritableStoreLike`](types.WritableStoreLike.md)<`T`\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>
