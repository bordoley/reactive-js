[Reactive-JS](../README.md) / [Promise](../modules/Promise.md) / Signature

# Interface: Signature

[Promise](../modules/Promise.md).Signature

## Hierarchy

- [`AsynchronousContainerBaseTypeClass`](type_classes.AsynchronousContainerBaseTypeClass.md)<[`Type`](../modules/Promise.md#type)\>

  ↳ **`Signature`**

## Table of contents

### Other Methods

- [toObservable](Promise.Signature.md#toobservable)

### Transform Methods

- [firstAsync](Promise.Signature.md#firstasync)
- [lastAsync](Promise.Signature.md#lastasync)

## Other Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Inherited from

[AsynchronousContainerBaseTypeClass](type_classes.AsynchronousContainerBaseTypeClass.md).[toObservable](type_classes.AsynchronousContainerBaseTypeClass.md#toobservable)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[AsynchronousContainerBaseTypeClass](type_classes.AsynchronousContainerBaseTypeClass.md).[firstAsync](type_classes.AsynchronousContainerBaseTypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[AsynchronousContainerBaseTypeClass](type_classes.AsynchronousContainerBaseTypeClass.md).[lastAsync](type_classes.AsynchronousContainerBaseTypeClass.md#lastasync)
