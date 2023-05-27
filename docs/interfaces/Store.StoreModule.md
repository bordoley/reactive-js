[Reactive-JS](../README.md) / [Store](../modules/Store.md) / StoreModule

# Interface: StoreModule

[Store](../modules/Store.md).StoreModule

## Hierarchy

- `Pick`<[`EventSourceContainerModule`](types.EventSourceContainerModule.md)<[`Type`](../modules/Store.md#type)\>, ``"addEventHandler"`` \| ``"toEventSource"`` \| ``"toObservable"`` \| ``"toReadonlyArrayAsync"``\>

  ↳ **`StoreModule`**

## Table of contents

### Methods

- [create](Store.StoreModule.md#create)

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
