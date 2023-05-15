[Reactive-JS](../README.md) / Store

# Module: Store

## Table of contents

### Interfaces

- [Signature](../interfaces/Store.Signature.md)

### Type Aliases

- [Type](Store.md#type)

### Functions

- [create](Store.md#create)
- [toSharedObservable](Store.md#tosharedobservable)

## Type Aliases

### Type

Ƭ **Type**: [`StoreContainer`](../interfaces/types.StoreContainer.md)

## Functions

### create

▸ **create**<`T`\>(`initialValue`): [`WritableStoreLike`](../interfaces/types.WritableStoreLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[`WritableStoreLike`](../interfaces/types.WritableStoreLike.md)<`T`\>

___

### toSharedObservable

▸ **toSharedObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>
