[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ToIterable

# Interface: ToIterable<C\>

[containers](../modules/containers.md).ToIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Table of contents

### Transform Methods

- [toIterable](containers.ToIterable.md#toiterable)

## Transform Methods

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>

Converts the ContainerLike to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>
