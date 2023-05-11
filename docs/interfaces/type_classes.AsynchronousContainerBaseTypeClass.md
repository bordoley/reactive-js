[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / AsynchronousContainerBaseTypeClass

# Interface: AsynchronousContainerBaseTypeClass<C\>

[type-classes](../modules/type_classes.md).AsynchronousContainerBaseTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`AsynchronousContainerBaseTypeClass`**

  ↳ [`Signature`](Disposable.Signature.md)

  ↳ [`Signature`](Promise.Signature.md)

  ↳ [`Signature`](Store.Signature.md)

## Table of contents

### Methods

- [toSharedObservable](type_classes.AsynchronousContainerBaseTypeClass.md#tosharedobservable)

## Methods

### toSharedObservable

▸ **toSharedObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>
