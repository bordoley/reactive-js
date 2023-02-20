[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Timeout

# Interface: Timeout<C\>

[rx](../modules/rx.md).Timeout

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Timeout`**

## Table of contents

### Operator Methods

- [timeout](rx.Timeout.md#timeout)

## Operator Methods

### timeout

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time in ms within which the source must emit values. |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `C` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
