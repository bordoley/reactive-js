[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / forkMerge

# Interface: forkMerge

[rx/ObservableLike](../modules/rx_ObservableLike.md).forkMerge

## Callable

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`, `C`\>(`fst`, `snd`, ...`tail`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TIn` | `TIn` |
| `TOut` | `TOut` |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md)<`unknown`, `C`\> = [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TIn`, `TOut`\>
