[Reactive-JS](../README.md) / Store

# Module: Store

## Table of contents

### Interfaces

- [StoreContainer](../interfaces/Store.StoreContainer.md)
- [StoreModule](../interfaces/Store.StoreModule.md)

### Type Aliases

- [Signature](Store.md#signature)
- [Type](Store.md#type)

### Functions

- [create](Store.md#create)
- [toObservable](Store.md#toobservable)

## Type Aliases

### Signature

Ƭ **Signature**: [`StoreModule`](../interfaces/Store.StoreModule.md)

___

### Type

Ƭ **Type**: [`StoreContainer`](../interfaces/Store.StoreContainer.md)

## Functions

### create

▸ **create**<`T`\>(`initialValue`): [`WritableStoreLike`](../interfaces/types.WritableStoreLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[`WritableStoreLike`](../interfaces/types.WritableStoreLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`StoreLike`](../interfaces/types.StoreLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>
