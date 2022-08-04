[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / switchAll

# Interface: switchAll

[rx/ObservableLike](../modules/rx_ObservableLike.md).switchAll

## Callable

### switchAll

▸ **switchAll**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

### switchAll

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](../modules/functions.md#function1)<`C`, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`C`, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

### switchAll

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](../modules/functions.md#function1)<`C`, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`C`, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

### switchAll

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](../modules/functions.md#function1)<`C`, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`C`, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>

### switchAll

▸ **switchAll**<`C`, `CInner`, `T`\>(): [`Function1`](../modules/functions.md#function1)<`C`, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`CInner`, `C`\> |
| `CInner` | extends [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`, `CInner`\> |
| `T` | `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`C`, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>
