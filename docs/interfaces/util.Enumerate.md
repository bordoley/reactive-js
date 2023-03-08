[Reactive-JS](../README.md) / [util](../modules/util.md) / Enumerate

# Interface: Enumerate<C, CEnumerator\>

[util](../modules/util.md).Enumerate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `CEnumerator` | extends [`EnumeratorLike`](util.EnumeratorLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Enumerate`**

## Table of contents

### Transform Methods

- [enumerate](util.Enumerate.md#enumerate)

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`CEnumerator`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`CEnumerator`, `T`\>\>
