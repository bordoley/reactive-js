[Reactive-JS](../README.md) / [core](../modules/core.md) / [DeferredObservableContainers](../modules/core.DeferredObservableContainers.md) / TypeClass

# Interface: TypeClass<C\>

[core](../modules/core.md).[DeferredObservableContainers](../modules/core.DeferredObservableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`DeferredObservableContainer`](core.DeferredObservableContainer-1.md) |

## Hierarchy

- [`TypeClass`](core.ObservableContainers.TypeClass.md)<`C`\>

- [`TypeClass`](core.DeferredContainers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

  ↳↳ [`TypeClass`](core.DeferredObservableContainer.TypeClass.md)

  ↳↳ [`TypeClass`](core.RunnableObservableContainers.TypeClass.md)

## Table of contents

### Constructor Methods

- [empty](core.DeferredObservableContainers.TypeClass.md#empty)
- [fromEnumeratorFactory](core.DeferredObservableContainers.TypeClass.md#fromenumeratorfactory)
- [fromFactory](core.DeferredObservableContainers.TypeClass.md#fromfactory)
- [fromIterable](core.DeferredObservableContainers.TypeClass.md#fromiterable)
- [fromOptional](core.DeferredObservableContainers.TypeClass.md#fromoptional)
- [fromReadonlyArray](core.DeferredObservableContainers.TypeClass.md#fromreadonlyarray)
- [generate](core.DeferredObservableContainers.TypeClass.md#generate)

### Transform Methods

- [multicast](core.DeferredObservableContainers.TypeClass.md#multicast)
- [share](core.DeferredObservableContainers.TypeClass.md#share)

## Constructor Methods

### empty

▸ **empty**<`T`\>(`options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](core.DeferredContainers.TypeClass.md).[empty](core.DeferredContainers.TypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](core.DeferredContainers.TypeClass.md).[fromEnumeratorFactory](core.DeferredContainers.TypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](core.DeferredContainers.TypeClass.md).[fromFactory](core.DeferredContainers.TypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](core.DeferredContainers.TypeClass.md).[fromIterable](core.DeferredContainers.TypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](core.DeferredContainers.TypeClass.md).[fromOptional](core.DeferredContainers.TypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[TypeClass](core.DeferredContainers.TypeClass.md).[fromReadonlyArray](core.DeferredContainers.TypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Overrides

[TypeClass](core.DeferredContainers.TypeClass.md).[generate](core.DeferredContainers.TypeClass.md#generate)

___

## Transform Methods

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](core.SharedObservableLike.md)<`T`\>\>

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
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](core.SharedObservableLike.md)<`T`\>\>
