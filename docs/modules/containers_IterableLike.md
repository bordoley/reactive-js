[Reactive-JS](../README.md) / containers/IterableLike

# Module: containers/IterableLike

## Table of contents

### Interfaces

- [IterableLike](../interfaces/containers_IterableLike.IterableLike.md)

### Type Aliases

- [ToIterable](containers_IterableLike.md#toiterable)

### Variables

- [toIterableT](containers_IterableLike.md#toiterablet)

### Functions

- [toIterable](containers_IterableLike.md#toiterable-1)

## Type Aliases

### ToIterable

Ƭ **ToIterable**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `toIterable`: <T\>() => [`Function1`](util_functions.md#function1)<[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

## Variables

### toIterableT

• `Const` **toIterableT**: [`ToIterable`](containers_IterableLike.md#toiterable)<[`IterableLike`](../interfaces/containers_IterableLike.IterableLike.md)\>

## Functions

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](util_functions.md#function1)<[`IterableLike`](../interfaces/containers_IterableLike.IterableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](util_functions.md#function1)<[`IterableLike`](../interfaces/containers_IterableLike.IterableLike.md)<`T`\>, `Iterable`<`T`\>\>
