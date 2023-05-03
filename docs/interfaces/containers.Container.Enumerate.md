[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [Container](../modules/containers.Container.md) / Enumerate

# Interface: Enumerate<C, CEnumerator\>

[containers](../modules/containers.md).[Container](../modules/containers.Container.md).Enumerate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |
| `CEnumerator` | extends [`EnumeratorContainer`](containers.EnumeratorContainer.md) = [`EnumeratorContainer`](containers.EnumeratorContainer.md) |

## Table of contents

### Transform Methods

- [enumerate](containers.Container.Enumerate.md#enumerate)

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`CEnumerator`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`CEnumerator`, `T`\>\>
