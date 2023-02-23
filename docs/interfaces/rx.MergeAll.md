[Reactive-JS](../README.md) / [rx](../modules/rx.md) / MergeAll

# Interface: MergeAll<C, O\>

[rx](../modules/rx.md).MergeAll

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`MergeAll`**

## Table of contents

### Operator Properties

- [mergeAll](rx.MergeAll.md#mergeall)

## Operator Properties

### mergeAll

• **mergeAll**: <T\>(`options?`: `O`) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>
