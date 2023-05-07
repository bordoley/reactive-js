[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / ExhaustMap

# Interface: ExhaustMap<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).ExhaustMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](rx.ObservableContainer.md) |

## Table of contents

### Operator Properties

- [exhaustMap](rx.Reactive.ExhaustMap.md#exhaustmap)

## Operator Properties

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>\>) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
