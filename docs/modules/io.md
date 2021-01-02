[Reactive-JS](../README.md) / io

# Module: io

## Index

### Interfaces

* [IOSinkAccumulatorLike](../interfaces/io.iosinkaccumulatorlike.md)
* [IOSinkLike](../interfaces/io.iosinklike.md)
* [IOSourceLike](../interfaces/io.iosourcelike.md)

### Type aliases

* [IOEvent](io.md#ioevent)
* [IOEventType](io.md#ioeventtype)
* [IOSourceOperator](io.md#iosourceoperator)

### Functions

* [createIOSinkAccumulator](io.md#createiosinkaccumulator)
* [decodeWithCharset](io.md#decodewithcharset)
* [done](io.md#done)
* [empty](io.md#empty)
* [encodeUtf8](io.md#encodeutf8)
* [fromArray](io.md#fromarray)
* [fromObservable](io.md#fromobservable)
* [fromValue](io.md#fromvalue)
* [map](io.md#map)
* [notify](io.md#notify)

## Type aliases

### IOEvent

Ƭ **IOEvent**<T\>: { `data`: T ; `type`: *notify*  } \| { `type`: *done*  }

#### Type parameters:

Name |
------ |
`T` |

___

### IOEventType

Ƭ **IOEventType**: *notify* \| *done*

___

### IOSourceOperator

Ƭ **IOSourceOperator**<TA, TB\>: [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TA\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

## Functions

### createIOSinkAccumulator

▸ `Const`**createIOSinkAccumulator**<T, TAcc\>(`reducer`: [*Reducer*](functions.md#reducer)<T, TAcc\>, `initialValue`: [*Factory*](functions.md#factory)<TAcc\>, `options?`: { `replay?`: *undefined* \| *number*  }): [*IOSinkAccumulatorLike*](../interfaces/io.iosinkaccumulatorlike.md)<T, TAcc\>

**`experimental`** 

#### Type parameters:

Name |
------ |
`T` |
`TAcc` |

#### Parameters:

Name | Type |
------ | ------ |
`reducer` | [*Reducer*](functions.md#reducer)<T, TAcc\> |
`initialValue` | [*Factory*](functions.md#factory)<TAcc\> |
`options?` | { `replay?`: *undefined* \| *number*  } |

**Returns:** [*IOSinkAccumulatorLike*](../interfaces/io.iosinkaccumulatorlike.md)<T, TAcc\>

___

### decodeWithCharset

▸ `Const`**decodeWithCharset**(`charset?`: *string*, `options?`: TextDecoderOptions): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<ArrayBuffer\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*string*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`charset?` | *string* |
`options?` | TextDecoderOptions |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<ArrayBuffer\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*string*\>\>

___

### done

▸ `Const`**done**<T\>(): [*IOEvent*](io.md#ioevent)<T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*IOEvent*](io.md#ioevent)<T\>

___

### empty

▸ `Const`**empty**<T\>(): [*IOSourceLike*](../interfaces/io.iosourcelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*IOSourceLike*](../interfaces/io.iosourcelike.md)<T\>

___

### encodeUtf8

▸ `Const`**encodeUtf8**(`a`: [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*string*\>): [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*string*\> |

**Returns:** [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>

___

### fromArray

▸ `Const`**fromArray**<T\>(`options?`: { `delay?`: *undefined* \| *number* ; `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<readonly T[], [*IOSourceLike*](../interfaces/io.iosourcelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number* ; `endIndex?`: *undefined* \| *number* ; `startIndex?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<readonly T[], [*IOSourceLike*](../interfaces/io.iosourcelike.md)<T\>\>

___

### fromObservable

▸ `Const`**fromObservable**<T\>(): [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*ObservableLike*](../interfaces/observable.observablelike.md)<T\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<T\>\>

___

### fromValue

▸ `Const`**fromValue**<T\>(`options?`: { `delay?`: *undefined* \| *number*  }): [*Function1*](functions.md#function1)<T, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options?` | { `delay?`: *undefined* \| *number*  } |

**Returns:** [*Function1*](functions.md#function1)<T, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<T\>\>

___

### map

▸ `Const`**map**<TA, TB\>(`mapper`: [*Function1*](functions.md#function1)<TA, TB\>): [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TA\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*Function1*](functions.md#function1)<TA, TB\> |

**Returns:** [*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TA\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<TB\>\>

___

### notify

▸ `Const`**notify**<T\>(`data`: T): [*IOEvent*](io.md#ioevent)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`data` | T |

**Returns:** [*IOEvent*](io.md#ioevent)<T\>
