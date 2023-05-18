[Reactive-JS](../README.md) / [Store](../modules/Store.md) / StoreModule

# Interface: StoreModule

[Store](../modules/Store.md).StoreModule

## Table of contents

### Methods

- [create](Store.StoreModule.md#create)
- [toObservable](Store.StoreModule.md#toobservable)

## Methods

### create

▸ **create**<`T`\>(`initialValue`): [`WritableStoreLike`](types.WritableStoreLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[`WritableStoreLike`](types.WritableStoreLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>
