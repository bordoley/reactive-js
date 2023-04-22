[Reactive-JS](../README.md) / [containers](../modules/containers.md) / FlatMapIterable

# Interface: FlatMapIterable<C, O\>

[containers](../modules/containers.md).FlatMapIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Table of contents

### Operator Properties

- [flatMapIterable](containers.FlatMapIterable.md#flatmapiterable)

## Operator Properties

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`IterableLike`](containers.IterableLike.md)<`TB`\>\>, `options?`: `O`) => [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`IterableLike`](containers.IterableLike.md)<`TB`\>\> |
| `options?` | `O` |

##### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
