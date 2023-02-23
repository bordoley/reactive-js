[Reactive-JS](../README.md) / [rx](../modules/rx.md) / MergeMap

# Interface: MergeMap<C, O\>

[rx](../modules/rx.md).MergeMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`MergeMap`**

## Table of contents

### Operator Properties

- [mergeMap](rx.MergeMap.md#mergemap)

## Operator Properties

### mergeMap

• **mergeMap**: <TA, TB\>(`mapper`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>\>, `options?`: `O`) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>\> |
| `options?` | `O` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
