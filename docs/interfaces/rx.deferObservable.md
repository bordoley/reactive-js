[Reactive-JS](../README.md) / [rx](../modules/rx.md) / deferObservable

# Interface: deferObservable<C\>

[rx](../modules/rx.md).deferObservable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Callable

### deferObservable

▸ **deferObservable**<`T`\>(`factory`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`SideEffect1`](../modules/functions.md#sideeffect1)<[`ObserverLike`](scheduling.ObserverLike.md)<`T`\>\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

### deferObservable

▸ **deferObservable**<`T`\>(`factory`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
