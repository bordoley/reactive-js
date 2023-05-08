[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / ConcatMap

# Interface: ConcatMap<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).ConcatMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Properties

- [concatMap](core.Container.ConcatMap.md#concatmap)

## Operator Properties

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Container.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

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
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Container.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>
