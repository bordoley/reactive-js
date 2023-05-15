[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / AsynchronousContainerBaseTypeClass

# Interface: AsynchronousContainerBaseTypeClass<C\>

[type-classes](../modules/type_classes.md).AsynchronousContainerBaseTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`AsynchronousContainerBaseTypeClass`**

  ↳ [`Signature`](EventSource.Signature.md)

  ↳ [`Signature`](Promise.Signature.md)

  ↳ [`Signature`](Store.Signature.md)

## Table of contents

### Other Methods

- [toSharedObservable](type_classes.AsynchronousContainerBaseTypeClass.md#tosharedobservable)

### Transform Methods

- [firstAsync](type_classes.AsynchronousContainerBaseTypeClass.md#firstasync)
- [lastAsync](type_classes.AsynchronousContainerBaseTypeClass.md#lastasync)

## Other Methods

### toSharedObservable

▸ **toSharedObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>
