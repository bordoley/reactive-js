[Reactive-JS](../README.md) / asyncEnumerable

# Module: asyncEnumerable

## Index

### Interfaces

* [AsyncEnumerableLike](../interfaces/asyncenumerable.asyncenumerablelike.md)

### Type aliases

* [AsyncConsumer](asyncenumerable.md#asyncconsumer)
* [ConsumeRequest](asyncenumerable.md#consumerequest)
* [Consumer](asyncenumerable.md#consumer)

### Functions

* [consume](asyncenumerable.md#consume)
* [consumeAsync](asyncenumerable.md#consumeasync)
* [done](asyncenumerable.md#done)
* [fromArray](asyncenumerable.md#fromarray)
* [fromEnumerable](asyncenumerable.md#fromenumerable)
* [fromIterable](asyncenumerable.md#fromiterable)
* [generate](asyncenumerable.md#generate)
* [notify](asyncenumerable.md#notify)

## Type aliases

### AsyncConsumer

Ƭ **AsyncConsumer**<T, TAcc\>: [*Function2*](functions.md#function2)<TAcc, T, [*ObservableLike*](../interfaces/observable.observablelike.md)<[*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>\>\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

___

### ConsumeRequest

Ƭ **ConsumeRequest**<TAcc\>: { `acc`: TAcc ; `type`: *notify*  } \| { `acc`: TAcc ; `type`: *done*  }

#### Type parameters:

Name |
------ |
`TAcc` |

___

### Consumer

Ƭ **Consumer**<T, TAcc\>: [*Function2*](functions.md#function2)<TAcc, T, [*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

## Functions

### consume

▸ `Const`**consume**<T, TAcc\>(`consumer`: [*Function2*](functions.md#function2)<TAcc, T, [*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>\>, `initial`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`consumer` | [*Function2*](functions.md#function2)<TAcc, T, [*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>\> |
`initial` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<[*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

___

### consumeAsync

▸ `Const`**consumeAsync**<T, TAcc\>(`consumer`: [*Function2*](functions.md#function2)<TAcc, T, [*ObservableLike*](../interfaces/observable.observablelike.md)<[*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>\>\>, `initial`: [*Factory*](functions.md#factory)<TAcc\>): [*Function1*](functions.md#function1)<[*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`consumer` | [*Function2*](functions.md#function2)<TAcc, T, [*ObservableLike*](../interfaces/observable.observablelike.md)<[*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>\>\> |
`initial` | [*Factory*](functions.md#factory)<TAcc\> |

**Returns:** [*Function1*](functions.md#function1)<[*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>, [*ObservableLike*](../interfaces/observable.observablelike.md)<TAcc\>\>

___

### done

▸ `Const`**done**<TAcc\>(`acc`: TAcc): [*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>

#### Type parameters:

Name |
------ |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`acc` | TAcc |

**Returns:** [*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>

___

### fromArray

▸ `Const`**fromArray**<T\>(`options?`: { `delay?`: *undefined* \| *number* ; `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<readonly T[], [*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>\>

Returns an `AsyncEnumerableLike` from the provided array.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number* ; `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], [*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>\>

___

### fromEnumerable

▸ `Const`**fromEnumerable**<T\>(): [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*EnumerableLike*](../interfaces/enumerable.enumerablelike.md)<T\>, [*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>\>

___

### fromIterable

▸ `Const`**fromIterable**<T\>(): [*Function1*](functions.md#function1)<*Iterable*<T\>, [*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<*Iterable*<T\>, [*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>\>

___

### generate

▸ `Const`**generate**<T\>(`generator`: [*Updater*](functions.md#updater)<T\>, `initialValue`: [*Factory*](functions.md#factory)<T\>, `options?`: { `delay?`: *undefined* \| *number*  }): [*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`generator` | [*Updater*](functions.md#updater)<T\> | The generator function.   |
`initialValue` | [*Factory*](functions.md#factory)<T\> | Factory function to generate the initial accumulator.    |
`options?` | { `delay?`: *undefined* \| *number*  } | - |

**Returns:** [*AsyncEnumerableLike*](../interfaces/asyncenumerable.asyncenumerablelike.md)<T\>

___

### notify

▸ `Const`**notify**<TAcc\>(`acc`: TAcc): [*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>

#### Type parameters:

Name |
------ |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`acc` | TAcc |

**Returns:** [*ConsumeRequest*](asyncenumerable.md#consumerequest)<TAcc\>
