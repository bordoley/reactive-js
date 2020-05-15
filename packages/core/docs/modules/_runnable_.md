[@reactive-js/core - v0.0.37](../README.md) › ["runnable"](_runnable_.md)

# Module: "runnable"

## Index

### Classes

* [AbstractDelegatingSink](../classes/_runnable_.abstractdelegatingsink.md)

### Interfaces

* [RunnableLike](../interfaces/_runnable_.runnablelike.md)
* [SinkLike](../interfaces/_runnable_.sinklike.md)

### Type aliases

* [RunnableFunction](_runnable_.md#runnablefunction)
* [SinkFunction](_runnable_.md#sinkfunction)

### Functions

* [compute](_runnable_.md#const-compute)
* [concat](_runnable_.md#concat)
* [concatWith](_runnable_.md#const-concatwith)
* [contains](_runnable_.md#const-contains)
* [createRunnable](_runnable_.md#const-createrunnable)
* [distinctUntilChanged](_runnable_.md#const-distinctuntilchanged)
* [empty](_runnable_.md#const-empty)
* [endWith](_runnable_.md#endwith)
* [everySatisfy](_runnable_.md#const-everysatisfy)
* [first](_runnable_.md#const-first)
* [flatMap](_runnable_.md#const-flatmap)
* [flatten](_runnable_.md#const-flatten)
* [forEach](_runnable_.md#const-foreach)
* [fromArray](_runnable_.md#const-fromarray)
* [fromEnumerable](_runnable_.md#const-fromenumerable)
* [fromEnumerator](_runnable_.md#const-fromenumerator)
* [fromIterable](_runnable_.md#const-fromiterable)
* [fromIterator](_runnable_.md#const-fromiterator)
* [fromValue](_runnable_.md#const-fromvalue)
* [generate](_runnable_.md#const-generate)
* [keep](_runnable_.md#const-keep)
* [keepType](_runnable_.md#const-keeptype)
* [lift](_runnable_.md#const-lift)
* [map](_runnable_.md#const-map)
* [noneSatisfy](_runnable_.md#const-nonesatisfy)
* [reduce](_runnable_.md#const-reduce)
* [repeat](_runnable_.md#repeat)
* [scan](_runnable_.md#const-scan)
* [skipFirst](_runnable_.md#const-skipfirst)
* [someSatisfy](_runnable_.md#const-somesatisfy)
* [startWith](_runnable_.md#startwith)
* [takeFirst](_runnable_.md#const-takefirst)
* [takeLast](_runnable_.md#const-takelast)
* [takeWhile](_runnable_.md#const-takewhile)
* [toArray](_runnable_.md#const-toarray)

## Type aliases

###  RunnableFunction

Ƭ **RunnableFunction**: *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TA›, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TB››*

___

###  SinkFunction

Ƭ **SinkFunction**: *[Function](_functions_.md#function)‹[SinkLike](../interfaces/_runnable_.sinklike.md)‹TB›, [SinkLike](../interfaces/_runnable_.sinklike.md)‹TA››*

## Functions

### `Const` compute

▸ **compute**<**T**>(`f`: [Factory](_functions_.md#factory)‹T›): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Factory](_functions_.md#factory)‹T› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

###  concat

▸ **concat**<**T**>(`fst`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, `snd`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, ...`tail`: Array‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

Creates an `RunnableLike` which emits all values from each source sequentially.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fst` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |
`snd` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |
`...tail` | Array‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` concatWith

▸ **concatWith**<**T**>(`snd`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`snd` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` contains

▸ **contains**<**T**>(`value`: T, `equality`: [Equality](_functions_.md#equality)‹T›): *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | T | - |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` createRunnable

▸ **createRunnable**<**T**>(`run`: [SideEffect1](_functions_.md#sideeffect1)‹[SinkLike](../interfaces/_runnable_.sinklike.md)‹T››): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`run` | [SideEffect1](_functions_.md#sideeffect1)‹[SinkLike](../interfaces/_runnable_.sinklike.md)‹T›› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` distinctUntilChanged

▸ **distinctUntilChanged**<**T**>(`equality`: [Equality](_functions_.md#equality)‹T›): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` empty

▸ **empty**<**T**>(): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

###  endWith

▸ **endWith**<**T**>(`value`: T, ...`values`: T[]): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` everySatisfy

▸ **everySatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` first

▸ **first**<**T**>(`runnable`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›): *[Option](_option_.md#option)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`runnable` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` flatMap

▸ **flatMap**<**TA**, **TB**>(`mapper`: [Function](_functions_.md#function)‹TA, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TB››): *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function](_functions_.md#function)‹TA, [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹TB›› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

___

### `Const` flatten

▸ **flatten**<**T**>(): *[RunnableFunction](_runnable_.md#runnablefunction)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, T›*

**Type parameters:**

▪ **T**

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, T›*

___

### `Const` forEach

▸ **forEach**<**T**>(`f`: [SideEffect1](_functions_.md#sideeffect1)‹T›): *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, void›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [SideEffect1](_functions_.md#sideeffect1)‹T› |

**Returns:** *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, void›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(`options`: object): *[Function](_functions_.md#function)‹keyof T[], [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {
    startIndex: 0,
  }

Name | Type |
------ | ------ |
`startIndex` | number |

**Returns:** *[Function](_functions_.md#function)‹keyof T[], [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` fromEnumerable

▸ **fromEnumerable**<**T**>(`enumerable`: [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T›): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`enumerable` | [EnumerableLike](../interfaces/_enumerable_.enumerablelike.md)‹T› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` fromEnumerator

▸ **fromEnumerator**<**T**>(`f`: [Factory](_functions_.md#factory)‹[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T››): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Factory](_functions_.md#factory)‹[EnumeratorLike](../interfaces/_enumerable_.enumeratorlike.md)‹T›› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` fromIterable

▸ **fromIterable**<**T**>(`iterable`: Iterable‹T›): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` fromIterator

▸ **fromIterator**<**T**, **TReturn**, **TNext**>(`f`: [Factory](_functions_.md#factory)‹Iterator‹T, TReturn, TNext››): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

▪ **TReturn**

▪ **TNext**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Factory](_functions_.md#factory)‹Iterator‹T, TReturn, TNext›› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` fromValue

▸ **fromValue**<**T**>(`value`: T): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` generate

▸ **generate**<**T**>(`generator`: [Generator](_functions_.md#generator)‹T›, `initialValue`: [Factory](_functions_.md#factory)‹T›): *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`generator` | [Generator](_functions_.md#generator)‹T› |
`initialValue` | [Factory](_functions_.md#factory)‹T› |

**Returns:** *[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›*

___

### `Const` keep

▸ **keep**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` keepType

▸ **keepType**<**TA**, **TB**>(`predicate`: [TypePredicate](_functions_.md#typepredicate)‹TA, TB›): *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**: *TA*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](_functions_.md#typepredicate)‹TA, TB› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

___

### `Const` lift

▸ **lift**<**TA**, **TB**>(`operator`: [SinkFunction](_runnable_.md#sinkfunction)‹TA, TB›): *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [SinkFunction](_runnable_.md#sinkfunction)‹TA, TB› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: [Function](_functions_.md#function)‹TA, TB›): *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`mapper` | [Function](_functions_.md#function)‹TA, TB› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹TA, TB›*

___

### `Const` noneSatisfy

▸ **noneSatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

### `Const` reduce

▸ **reduce**<**T**, **TAcc**>(`reducer`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[Function](_functions_.md#function)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›, TAcc›*

___

###  repeat

▸ **repeat**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹number›): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

Returns an EnumerableLike that applies the predicate function each time the source
completes to determine if the enumerable should be repeated.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹number› | The predicate function to apply.  |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

▸ **repeat**<**T**>(`count`: number): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

Returns an EnumerableLike that repeats the source count times.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number |   |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

▸ **repeat**<**T**>(): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

Returns an EnumerableLike` that continually repeats the source.

**Type parameters:**

▪ **T**

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` scan

▸ **scan**<**T**, **TAcc**>(`scanner`: [Reducer](_functions_.md#reducer)‹T, TAcc›, `initialValue`: [Factory](_functions_.md#factory)‹TAcc›): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, TAcc›*

**Type parameters:**

▪ **T**

▪ **TAcc**

**Parameters:**

Name | Type |
------ | ------ |
`scanner` | [Reducer](_functions_.md#reducer)‹T, TAcc› |
`initialValue` | [Factory](_functions_.md#factory)‹TAcc› |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, TAcc›*

___

### `Const` skipFirst

▸ **skipFirst**<**T**>(`count`: number): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` someSatisfy

▸ **someSatisfy**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›): *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_functions_.md#predicate)‹T› |

**Returns:** *[Predicate](_functions_.md#predicate)‹[RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T››*

___

###  startWith

▸ **startWith**<**T**>(`value`: T, ...`values`: T[]): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`...values` | T[] |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` takeFirst

▸ **takeFirst**<**T**>(`count`: number): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` takeLast

▸ **takeLast**<**T**>(`count`: number): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 1 |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`predicate`: [Predicate](_functions_.md#predicate)‹T›, `__namedParameters`: object): *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **predicate**: *[Predicate](_functions_.md#predicate)‹T›*

▪`Default value`  **__namedParameters**: *object*= { inclusive: false }

Name | Type |
------ | ------ |
`inclusive` | boolean |

**Returns:** *[RunnableFunction](_runnable_.md#runnablefunction)‹T, T›*

___

### `Const` toArray

▸ **toArray**<**T**>(`runnable`: [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T›): *keyof T[]*

Accumulates all values emitted by `enumerable` into an array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`runnable` | [RunnableLike](../interfaces/_runnable_.runnablelike.md)‹T› |

**Returns:** *keyof T[]*
