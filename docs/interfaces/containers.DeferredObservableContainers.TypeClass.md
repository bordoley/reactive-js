[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [DeferredObservableContainers](../modules/containers.DeferredObservableContainers.md) / TypeClass

# Interface: TypeClass<C\>

[containers](../modules/containers.md).[DeferredObservableContainers](../modules/containers.DeferredObservableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`DeferredObservableContainer`](containers.DeferredObservableContainer-1.md) |

## Hierarchy

- [`TypeClass`](containers.ObservableContainers.TypeClass.md)<`C`\>

- [`TypeClass`](containers.DeferredContainers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

  ↳↳ [`TypeClass`](containers.DeferredObservableContainer.TypeClass.md)

  ↳↳ [`TypeClass`](containers.RunnableObservableContainers.TypeClass.md)

## Table of contents

### Constructor Methods

- [empty](containers.DeferredObservableContainers.TypeClass.md#empty)
- [fromEnumeratorFactory](containers.DeferredObservableContainers.TypeClass.md#fromenumeratorfactory)
- [fromFactory](containers.DeferredObservableContainers.TypeClass.md#fromfactory)
- [fromIterable](containers.DeferredObservableContainers.TypeClass.md#fromiterable)
- [fromOptional](containers.DeferredObservableContainers.TypeClass.md#fromoptional)
- [fromReadonlyArray](containers.DeferredObservableContainers.TypeClass.md#fromreadonlyarray)
- [generate](containers.DeferredObservableContainers.TypeClass.md#generate)

### Transform Methods

- [multicast](containers.DeferredObservableContainers.TypeClass.md#multicast)
- [share](containers.DeferredObservableContainers.TypeClass.md#share)

## Constructor Methods

### empty

▸ **empty**<`T`\>(`options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](containers.DeferredContainers.TypeClass.md).[empty](containers.DeferredContainers.TypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromEnumeratorFactory](containers.DeferredContainers.TypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromFactory](containers.DeferredContainers.TypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromIterable](containers.DeferredContainers.TypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromOptional](containers.DeferredContainers.TypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromReadonlyArray](containers.DeferredContainers.TypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](containers.DeferredContainers.TypeClass.md).[generate](containers.DeferredContainers.TypeClass.md#generate)

___

## Transform Methods

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>
