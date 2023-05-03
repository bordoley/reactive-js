[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / BackpressureStrategy

# Interface: BackpressureStrategy<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).BackpressureStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Methods

- [backpressureStrategy](rx.Reactive.BackpressureStrategy.md#backpressurestrategy)

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
