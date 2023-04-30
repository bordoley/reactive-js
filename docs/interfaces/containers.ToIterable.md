[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ToIterable

# Interface: ToIterable<C\>

[containers](../modules/containers.md).ToIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Table of contents

### Transform Methods

- [toIterable](containers.ToIterable.md#toiterable)

## Transform Methods

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>
