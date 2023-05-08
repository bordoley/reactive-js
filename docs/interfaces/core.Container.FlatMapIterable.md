[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / FlatMapIterable

# Interface: FlatMapIterable<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).FlatMapIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Properties

- [flatMapIterable](core.Container.FlatMapIterable.md#flatmapiterable)

## Operator Properties

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>
