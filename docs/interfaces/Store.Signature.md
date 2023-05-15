[Reactive-JS](../README.md) / [Store](../modules/Store.md) / Signature

# Interface: Signature

[Store](../modules/Store.md).Signature

## Hierarchy

- [`AsynchronousContainerBaseTypeClass`](type_classes.AsynchronousContainerBaseTypeClass.md)<[`Type`](../modules/Store.md#type)\>

  ↳ **`Signature`**

## Table of contents

### Other Methods

- [create](Store.Signature.md#create)
- [toObservable](Store.Signature.md#toobservable)

### Transform Methods

- [firstAsync](Store.Signature.md#firstasync)
- [lastAsync](Store.Signature.md#lastasync)

## Other Methods

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

#### Inherited from

[AsynchronousContainerBaseTypeClass](type_classes.AsynchronousContainerBaseTypeClass.md).[toObservable](type_classes.AsynchronousContainerBaseTypeClass.md#toobservable)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[AsynchronousContainerBaseTypeClass](type_classes.AsynchronousContainerBaseTypeClass.md).[firstAsync](type_classes.AsynchronousContainerBaseTypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](types.StoreLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[AsynchronousContainerBaseTypeClass](type_classes.AsynchronousContainerBaseTypeClass.md).[lastAsync](type_classes.AsynchronousContainerBaseTypeClass.md#lastasync)
