[@reactive-js/node](README.md)

# @reactive-js/node

## Index

### Enumerations

* [ReadableEventType](enums/readableeventtype.md)
* [ReadableMode](enums/readablemode.md)

### Type aliases

* [ReadableEvent](README.md#readableevent)

### Variables

* [emptyReadableAsyncEnumerable](README.md#const-emptyreadableasyncenumerable)

### Functions

* [bindNodeCallback](README.md#bindnodecallback)
* [createReadableAsyncEnumerable](README.md#const-createreadableasyncenumerable)
* [createReadableAsyncEnumerator](README.md#const-createreadableasyncenumerator)
* [createWritableAsyncEnumerable](README.md#const-createwritableasyncenumerable)
* [createWritableAsyncEnumerator](README.md#const-createwritableasyncenumerator)
* [getHostScheduler](README.md#const-gethostscheduler)
* [setSchedulerTimeout](README.md#const-setschedulertimeout)
* [transform](README.md#const-transform)

## Type aliases

###  ReadableEvent

Ƭ **ReadableEvent**: *object | object*

## Variables

### `Const` emptyReadableAsyncEnumerable

• **emptyReadableAsyncEnumerable**: *AsyncEnumerableLike‹[ReadableMode](enums/readablemode.md), object | object›* =  createAsyncEnumerable<
  ReadableMode,
  ReadableEvent
>(map(_ => ({ type: ReadableEventType.End })))

## Functions

###  bindNodeCallback

▸ **bindNodeCallback**<**R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`callback`: function): *unknown*

**Parameters:**

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3, `res4`: R4): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |
`res4` | R4 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3, `r4`: R4): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |
`r4` | R4 |

**Returns:** *function*

▸ (): *ObservableLike‹T›*

▸ **bindNodeCallback**<**R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`callback`: function): *unknown*

**Parameters:**

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |

**Returns:** *function*

▸ (): *ObservableLike‹T›*

▸ **bindNodeCallback**<**R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`callback`: function): *unknown*

**Parameters:**

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |

**Returns:** *function*

▸ (): *ObservableLike‹T›*

▸ **bindNodeCallback**<**R1**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **R1**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`callback`: function): *unknown*

**Parameters:**

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |

▪ **selector**: *function*

▸ (`r1`: R1): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |

**Returns:** *function*

▸ (): *ObservableLike‹T›*

▸ **bindNodeCallback**(`callbackFunc`: function): *function*

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`callback`: function): *unknown*

**Parameters:**

▪ **callback**: *function*

▸ (`err`: unknown): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *function*

▸ (): *ObservableLike‹void›*

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3, `res4`: R4): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |
`res4` | R4 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3, `r4`: R4): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |
`r4` | R4 |

**Returns:** *function*

▸ (`arg1`: A1): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |

**Returns:** *function*

▸ (`arg1`: A1): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |

**Returns:** *function*

▸ (`arg1`: A1): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**, **R1**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **R1**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |

▪ **selector**: *function*

▸ (`r1`: R1): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |

**Returns:** *function*

▸ (`arg1`: A1): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**>(`callbackFunc`: function): *function*

**Type parameters:**

▪ **A1**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **callback**: *function*

▸ (`err`: unknown): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *function*

▸ (`arg1`: A1): *ObservableLike‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3, `res4`: R4): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |
`res4` | R4 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3, `r4`: R4): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |
`r4` | R4 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **R1**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |

▪ **selector**: *function*

▸ (`r1`: R1): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**>(`callbackFunc`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **callback**: *function*

▸ (`err`: unknown): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *ObservableLike‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3, `res4`: R4): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |
`res4` | R4 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3, `r4`: R4): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |
`r4` | R4 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **R1**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |

▪ **selector**: *function*

▸ (`r1`: R1): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**>(`callbackFunc`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **callback**: *function*

▸ (`err`: unknown): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *ObservableLike‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3, `res4`: R4): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |
`res4` | R4 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3, `r4`: R4): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |
`r4` | R4 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **R1**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |

▪ **selector**: *function*

▸ (`r1`: R1): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**>(`callbackFunc`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **callback**: *function*

▸ (`err`: unknown): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *ObservableLike‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **R4**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **arg5**: *A5*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3, `res4`: R4): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |
`res4` | R4 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3, `r4`: R4): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |
`r4` | R4 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **R1**

▪ **R2**

▪ **R3**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **arg5**: *A5*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2, `res3`: R3): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |
`res3` | R3 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2, `r3`: R3): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |
`r3` | R3 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **R1**

▪ **R2**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **arg5**: *A5*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1, `res2`: R2): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |
`res2` | R2 |

▪ **selector**: *function*

▸ (`r1`: R1, `r2`: R2): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |
`r2` | R2 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **T**>(`callbackFunc`: function, `selector`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

▪ **R1**

▪ **T**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **arg5**: *A5*

▪ **callback**: *function*

▸ (`err`: unknown, `res1`: R1): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |
`res1` | R1 |

▪ **selector**: *function*

▸ (`r1`: R1): *T*

**Parameters:**

Name | Type |
------ | ------ |
`r1` | R1 |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *ObservableLike‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**>(`callbackFunc`: function): *function*

**Type parameters:**

▪ **A1**

▪ **A2**

▪ **A3**

▪ **A4**

▪ **A5**

**Parameters:**

▪ **callbackFunc**: *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5, `callback`: function): *unknown*

**Parameters:**

▪ **arg1**: *A1*

▪ **arg2**: *A2*

▪ **arg3**: *A3*

▪ **arg4**: *A4*

▪ **arg5**: *A5*

▪ **callback**: *function*

▸ (`err`: unknown): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`err` | unknown |

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *ObservableLike‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

___

### `Const` createReadableAsyncEnumerable

▸ **createReadableAsyncEnumerable**(`factory`: function): *AsyncEnumerableLike‹[ReadableMode](enums/readablemode.md), [ReadableEvent](README.md#readableevent)›*

**Parameters:**

▪ **factory**: *function*

▸ (): *Readable*

**Returns:** *AsyncEnumerableLike‹[ReadableMode](enums/readablemode.md), [ReadableEvent](README.md#readableevent)›*

___

### `Const` createReadableAsyncEnumerator

▸ **createReadableAsyncEnumerator**(`readable`: Readable, `scheduler`: SchedulerLike, `replayCount?`: undefined | number): *AsyncEnumeratorLike‹[ReadableMode](enums/readablemode.md), [ReadableEvent](README.md#readableevent)›*

**Parameters:**

Name | Type |
------ | ------ |
`readable` | Readable |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *AsyncEnumeratorLike‹[ReadableMode](enums/readablemode.md), [ReadableEvent](README.md#readableevent)›*

___

### `Const` createWritableAsyncEnumerable

▸ **createWritableAsyncEnumerable**(`factory`: function): *AsyncEnumerableLike‹[ReadableEvent](README.md#readableevent), [ReadableMode](enums/readablemode.md)›*

**Parameters:**

▪ **factory**: *function*

▸ (): *Writable*

**Returns:** *AsyncEnumerableLike‹[ReadableEvent](README.md#readableevent), [ReadableMode](enums/readablemode.md)›*

___

### `Const` createWritableAsyncEnumerator

▸ **createWritableAsyncEnumerator**(`writable`: Writable, `scheduler`: SchedulerLike, `replayCount?`: undefined | number): *AsyncEnumeratorLike‹[ReadableEvent](README.md#readableevent), [ReadableMode](enums/readablemode.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`writable` | Writable |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *AsyncEnumeratorLike‹[ReadableEvent](README.md#readableevent), [ReadableMode](enums/readablemode.md)›*

___

### `Const` getHostScheduler

▸ **getHostScheduler**(): *SchedulerLike*

**Returns:** *SchedulerLike*

___

### `Const` setSchedulerTimeout

▸ **setSchedulerTimeout**(`newTimeout`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newTimeout` | number |

**Returns:** *void*

___

### `Const` transform

▸ **transform**(`factory`: function): *AsyncEnumerableOperatorLike‹[ReadableMode](enums/readablemode.md), [ReadableEvent](README.md#readableevent), [ReadableMode](enums/readablemode.md), [ReadableEvent](README.md#readableevent)›*

**Parameters:**

▪ **factory**: *function*

▸ (): *Transform*

**Returns:** *AsyncEnumerableOperatorLike‹[ReadableMode](enums/readablemode.md), [ReadableEvent](README.md#readableevent), [ReadableMode](enums/readablemode.md), [ReadableEvent](README.md#readableevent)›*
