[@reactive-js/core - v0.0.37](../README.md) › ["enumerable"](_enumerable_.md)

# Module: "enumerable"

## Index

### Interfaces

* [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)
* [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)

### Type aliases

* [EnumerableFunction](_enumerable_.md#enumerablefunction)
* [EnumeratorFunction](_enumerable_.md#enumeratorfunction)

### Functions

* [compute](_enumerable_.md#const-compute)
* [concat](_enumerable_.md#concat)
* [concatMap](_enumerable_.md#const-concatmap)
* [concatWith](_enumerable_.md#const-concatwith)
* [contains](_enumerable_.md#const-contains)
* [current](_enumerable_.md#const-current)
* [distinctUntilChanged](_enumerable_.md#const-distinctuntilchanged)
* [empty](_enumerable_.md#const-empty)
* [endWith](_enumerable_.md#endwith)
* [enumerate](_enumerable_.md#const-enumerate)
* [everySatisfy](_enumerable_.md#const-everysatisfy)
* [first](_enumerable_.md#const-first)
* [flatten](_enumerable_.md#const-flatten)
* [forEach](_enumerable_.md#const-foreach)
* [fromArray](_enumerable_.md#const-fromarray)
* [fromIterable](_enumerable_.md#const-fromiterable)
* [fromIterator](_enumerable_.md#const-fromiterator)
* [fromValue](_enumerable_.md#const-fromvalue)
* [generate](_enumerable_.md#const-generate)
* [hasCurrent](_enumerable_.md#const-hascurrent)
* [keep](_enumerable_.md#const-keep)
* [keepType](_enumerable_.md#const-keeptype)
* [lift](_enumerable_.md#const-lift)
* [map](_enumerable_.md#const-map)
* [move](_enumerable_.md#const-move)
* [noneSatisfy](_enumerable_.md#const-nonesatisfy)
* [reduce](_enumerable_.md#const-reduce)
* [repeat](_enumerable_.md#repeat)
* [scan](_enumerable_.md#const-scan)
* [skipFirst](_enumerable_.md#const-skipfirst)
* [someSatisfy](_enumerable_.md#const-somesatisfy)
* [startWith](_enumerable_.md#startwith)
* [takeFirst](_enumerable_.md#const-takefirst)
* [takeLast](_enumerable_.md#const-takelast)
* [takeWhile](_enumerable_.md#const-takewhile)
* [toArray](_enumerable_.md#const-toarray)
* [toIterable](_enumerable_.md#const-toiterable)
* [zip](_enumerable_.md#zip)
* [zipWith](_enumerable_.md#const-zipwith)

## Type aliases

###  EnumerableFunction

Ƭ **EnumerableFunction**: *[Function](_functions_.md#function)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB››*

A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB>

___

###  EnumeratorFunction

Ƭ **EnumeratorFunction**: *[Function](_functions_.md#function)‹[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TA›, [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹TB››*

A unary function that transforms an EnumeratorLike<TA> into a EnumeratorLike<TB>

## Functions

### `Const` compute

▸ **compute**<**T**>(): *[Function](_functions_.md#function)‹[Factory](_functions_.md#factory)‹T›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Creates an EnumerableLike that emits the computed value.

**Type parameters:**

▪ **T**

**Returns:** *[Function](_functions_.md#function)‹[Factory](_functions_.md#factory)‹T›, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

###  concat

▸ **concat**<**T**>(`fst`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, `snd`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, ...`tail`: Array‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Creates an EnumerableLike which yields all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |
`snd` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |
`...tail` | Array‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` concatMap

▸ **concatMap**<**TA**, **TB**>(`mapper`: [Function](_functions_.md#function)‹TA, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB››): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, TB›*

Maps each item yielded by the sourc using a mapping function, then flattens the result.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Function](_functions_.md#function)‹TA, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›› |   |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, TB›*

___

### `Const` concatWith

▸ **concatWith**<**T**>(`snd`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` contains

▸ **contains**<**T**>(`value`: T, `equality`: [Equality](_functions_.md#equality)‹T›): *[Predicate](_functions_.md#predicate)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Returns `true` value if source yields any item equal to `value`, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | T | - |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[Predicate](_functions_.md#predicate)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

### `Const` current

▸ **current**<**T**>(`enumerator`: [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›): *T*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T› |

**Returns:** *T*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equality`: [Equality](_functions_.md#equality)‹T›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` empty

▸ **empty**<**T**>(): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Returns an empty EnumerableLike.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike that yields items from the source,
concatenated with the values specified as arguments.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` enumerate

▸ **enumerate**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›*

___

### `Const` everySatisfy

▸ **everySatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Returns `true` if the predicate is satisfied for
every value produced by the source, or if the source is empty, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[Predicate](_functions_.md#predicate)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

### `Const` first

▸ **first**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[Option](_option_.md#option)‹T›*

Returns the first item in the EnumerableLike collection or none.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |   |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` flatten

▸ **flatten**<**T**>(): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, T›*

Converts a higher-order EnumerableLike into a first-order EnumerableLike.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, T›*

___

### `Const` forEach

▸ **forEach**<**T**>(`f`: [SideEffect1](_functions_.md#sideeffect1)‹T›): *[Function](_functions_.md#function)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, void›*

Applies the side-effect function `f` to each item in the EnumerableLike collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | [SideEffect1](_functions_.md#sideeffect1)‹T› |   |

**Returns:** *[Function](_functions_.md#function)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, void›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`__namedParameters`: object): *(Anonymous function)*

Returns an EnumerableLike view over the `values` array.

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= { startIndex: 0 }

Name | Type |
------ | ------ |
`startIndex` | number |

**Returns:** *(Anonymous function)*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Converts a javascript Iterable to an EnumerableLike.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› |   |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` fromIterator

▸ **fromIterator**<**T**, **TReturn**, **TNext**>(`f`: [Factory](_functions_.md#factory)‹Iterator‹T, TReturn, TNext››): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Returns a single use EnumerableLike over the javascript Iterator
returned by the function `f`.

**Type parameters:**

▪ **T**

▪ **TReturn**

▪ **TNext**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | [Factory](_functions_.md#factory)‹Iterator‹T, TReturn, TNext›› |   |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` fromValue

▸ **fromValue**<**T**>(): *[Function](_functions_.md#function)‹T, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Creates an EnumerableLike that yields `value`.

**Type parameters:**

▪ **T**

**Returns:** *[Function](_functions_.md#function)‹T, [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: [Generator](_functions_.md#generator)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

Generates an EnumerableLike from a generator function
that is applied to an accumulator value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`generator` | [Generator](_functions_.md#generator)‹T› | the generator function. |
`initialValue` | [Factory](_functions_.md#factory)‹T› | Factory function used to generate the initial accumulator.  |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›*

___

### `Const` hasCurrent

▸ **hasCurrent**<**T**>(`enumerator`: [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T› |

**Returns:** *boolean*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an `EnumerableLike` that only emits items produced by the
source that satisfy the specified predicate.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: [TypePredicate](_functions_.md#typepredicate)‹TA, TB›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, TB›*

Returns an `EnumerableLike` that only emits items from the
source that satisfy the specified type predicate.

**Type parameters:**

▪ **TA**

▪ **TB**: *TA*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [TypePredicate](_functions_.md#typepredicate)‹TA, TB› | The predicate function.  |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, TB›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [EnumeratorFunction](_enumerable_.md#enumeratorfunction)‹TA, TB›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, TB›*

Returns an EnumerableFunction that applies `operator` to
the EnumeratorLike returned by the source when enumerated.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operator` | [EnumeratorFunction](_enumerable_.md#enumeratorfunction)‹TA, TB› |   |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function](_functions_.md#function)‹TA, TB›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, TB›*

Returns an `EnumerableLike` that applies the `mapper` function to each
value emitted by the source.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Function](_functions_.md#function)‹TA, TB› | The map function to apply each value. Must be a pure function.  |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, TB›*

___

### `Const` move

▸ **move**<**T**>(`enumerator`: [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerator` | [EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T› |

**Returns:** *boolean*

___

### `Const` noneSatisfy

▸ **noneSatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Returns `true` if the predicate does not satisfy
every value produced by the source, or if the source is empty, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[Predicate](_functions_.md#predicate)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[Function](_functions_.md#function)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, TAcc›*

Applies an accumulator function over the source, returning the accumulated result.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› | The accumulator function called on each source value. |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› | The initial accumulation value.  |

**Returns:** *[Function](_functions_.md#function)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›, TAcc›*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹number›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike that applies the predicate function each time the source
completes to determine if the enumerable should be repeated.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹number› | The predicate function to apply.  |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

▸ **repeat**<**T**>(`count`: number): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike that repeats the source count times.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number |   |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

▸ **repeat**<**T**>(): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike` that continually repeats the source.

**Type parameters:**

▪ **T**

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, TAcc›*

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, TAcc›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike that skips the first `count` values emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` someSatisfy

▸ **someSatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

Returns `true` value if the any item satisfies the predicate, otherwise `false`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› | The predicate function.  |

**Returns:** *[Predicate](_functions_.md#predicate)‹[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T››*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike that yields the values followed by items from the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike that only yields the first `count` values emitted by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike that only yields the last `count` items yielded by the source.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1 | The maximum number of values to emit.  |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›, `__namedParameters`: object): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *[Predicate](_functions_.md#predicate)‹T›*

The predicate function.

▪`Default value`  **__namedParameters**: *object*= { inclusive: false }

Name | Type |
------ | ------ |
`inclusive` | boolean |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹T, T›*

___

### `Const` toArray

▸ **toArray**<**T**>(): *function*

Accumulates all values emitted by `enumerable` into an array.

**Type parameters:**

▪ **T**

**Returns:** *function*

▸ (`a`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`a` | TA |

___

### `Const` toIterable

▸ **toIterable**<**T**>(`source`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *Iterable‹T›*

Converts an EnumerableLike into a javascript Iterable.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`source` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *Iterable‹T›*

___

###  zip

▸ **zip**<**TA**, **TB**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB]›*

▸ **zip**<**TA**, **TB**, **TC**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, `f`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |
`f` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, `f`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, `g`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |
`f` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF› |
`g` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, `f`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, `g`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›, `h`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |
`f` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF› |
`g` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG› |
`h` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **zip**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA›, `b`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›, `c`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC›, `d`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD›, `e`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE›, `f`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF›, `g`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG›, `h`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH›, `i`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TI›): *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
in order, of each of its inputs.

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TA› |
`b` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |
`c` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TC› |
`d` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TD› |
`e` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TE› |
`f` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TF› |
`g` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TG› |
`h` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TH› |
`i` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TI› |

**Returns:** *[EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

### `Const` zipWith

▸ **zipWith**<**TA**, **TB**>(`snd`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB›): *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, [TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹TB› |

**Returns:** *[EnumerableFunction](_enumerable_.md#enumerablefunction)‹TA, [TA, TB]›*
