[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / ToRunnable

# Interface: ToRunnable<C\>

[runnable](../modules/runnable.md).ToRunnable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ToRunnable`**

## Table of contents

### Properties

- [type](runnable.ToRunnable.md#type)

### Methods

- [toRunnable](runnable.ToRunnable.md#torunnable)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`RunnableLike`](runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`RunnableLike`](runnable.RunnableLike.md)<`T`\>\>
