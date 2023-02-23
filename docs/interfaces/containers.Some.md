[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Some

# Interface: Some<C, O\>

[containers](../modules/containers.md).Some

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Some`**

## Table of contents

### Methods

- [some](containers.Some.md#some)

## Methods

### some

▸ **some**<`T`\>(`predicate`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `boolean`\>

Determines whether the specified predicate returns true for any
element of a Container. The predicate function is invoked for each element
in the Container until it returns true, or until the end of the Container.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `boolean`\>
