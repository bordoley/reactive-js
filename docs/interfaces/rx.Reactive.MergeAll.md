[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / MergeAll

# Interface: MergeAll<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).MergeAll

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Properties

- [mergeAll](rx.Reactive.MergeAll.md#mergeall)

## Operator Properties

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `T`\>
