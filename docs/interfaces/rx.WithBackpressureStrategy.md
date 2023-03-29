[Reactive-JS](../README.md) / [rx](../modules/rx.md) / WithBackpressureStrategy

# Interface: WithBackpressureStrategy<C\>

[rx](../modules/rx.md).WithBackpressureStrategy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`WithBackpressureStrategy`**

## Table of contents

### Operator Methods

- [withBackpressureStrategy](rx.WithBackpressureStrategy.md#withbackpressurestrategy)

## Operator Methods

### withBackpressureStrategy

▸ **withBackpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

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
