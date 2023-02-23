[Reactive-JS](../README.md) / [rx](../modules/rx.md) / MergeWith

# Interface: MergeWith<C\>

[rx](../modules/rx.md).MergeWith

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`MergeWith`**

## Table of contents

### Operator Properties

- [mergeWith](rx.MergeWith.md#mergewith)

## Operator Properties

### mergeWith

• **mergeWith**: <T\>(`snd`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>[]) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>[] |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
