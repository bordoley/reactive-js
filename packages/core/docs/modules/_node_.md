[@reactive-js/core - v0.0.37](../README.md) › ["node"](_node_.md)

# Module: "node"

## Index

### Functions

* [bindNodeCallback](_node_.md#bindnodecallback)
* [brotliCompress](_node_.md#const-brotlicompress)
* [brotliDecompress](_node_.md#const-brotlidecompress)
* [createDisposableNodeStream](_node_.md#const-createdisposablenodestream)
* [createReadableFlowable](_node_.md#const-createreadableflowable)
* [createWritableFlowableSink](_node_.md#const-createwritableflowablesink)
* [deflate](_node_.md#const-deflate)
* [gunzip](_node_.md#const-gunzip)
* [gzip](_node_.md#const-gzip)
* [inflate](_node_.md#const-inflate)
* [transform](_node_.md#const-transform)

## Functions

###  bindNodeCallback

▸ **bindNodeCallback**<**R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

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

▪ **selector**: *[Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›*

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

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

▪ **selector**: *[Function3](_functions_.md#function3)‹R1, R2, R3, T›*

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

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

▪ **selector**: *[Function2](_functions_.md#function2)‹R1, R2, T›*

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**<**R1**, **T**>(`callbackFunc`: function, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

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

▪ **selector**: *[Function1](_functions_.md#function1)‹R1, T›*

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T››*

▸ **bindNodeCallback**(`callbackFunc`: function): *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

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

**Returns:** *[Factory](_functions_.md#factory)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹void››*

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *function*

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

▪ **selector**: *[Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›*

**Returns:** *function*

▸ (`arg1`: A1): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *function*

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

▪ **selector**: *[Function3](_functions_.md#function3)‹R1, R2, R3, T›*

**Returns:** *function*

▸ (`arg1`: A1): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *function*

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

▪ **selector**: *[Function2](_functions_.md#function2)‹R1, R2, T›*

**Returns:** *function*

▸ (`arg1`: A1): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**, **R1**, **T**>(`callbackFunc`: function, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *function*

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

▪ **selector**: *[Function1](_functions_.md#function1)‹R1, T›*

**Returns:** *function*

▸ (`arg1`: A1): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

▸ (`arg1`: A1): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *function*

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

▪ **selector**: *[Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *function*

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

▪ **selector**: *[Function3](_functions_.md#function3)‹R1, R2, R3, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *function*

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

▪ **selector**: *[Function2](_functions_.md#function2)‹R1, R2, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**, **R1**, **T**>(`callbackFunc`: function, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *function*

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

▪ **selector**: *[Function1](_functions_.md#function1)‹R1, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

▸ (`arg1`: A1, `arg2`: A2): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *function*

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

▪ **selector**: *[Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *function*

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

▪ **selector**: *[Function3](_functions_.md#function3)‹R1, R2, R3, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *function*

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

▪ **selector**: *[Function2](_functions_.md#function2)‹R1, R2, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **R1**, **T**>(`callbackFunc`: function, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *function*

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

▪ **selector**: *[Function1](_functions_.md#function1)‹R1, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *function*

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

▪ **selector**: *[Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *function*

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

▪ **selector**: *[Function3](_functions_.md#function3)‹R1, R2, R3, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *function*

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

▪ **selector**: *[Function2](_functions_.md#function2)‹R1, R2, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **R1**, **T**>(`callbackFunc`: function, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *function*

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

▪ **selector**: *[Function1](_functions_.md#function1)‹R1, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **R3**, **R4**, **T**>(`callbackFunc`: function, `selector`: [Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›): *function*

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

▪ **selector**: *[Function4](_functions_.md#function4)‹R1, R2, R3, R4, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **R3**, **T**>(`callbackFunc`: function, `selector`: [Function3](_functions_.md#function3)‹R1, R2, R3, T›): *function*

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

▪ **selector**: *[Function3](_functions_.md#function3)‹R1, R2, R3, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **R2**, **T**>(`callbackFunc`: function, `selector`: [Function2](_functions_.md#function2)‹R1, R2, T›): *function*

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

▪ **selector**: *[Function2](_functions_.md#function2)‹R1, R2, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

▸ **bindNodeCallback**<**A1**, **A2**, **A3**, **A4**, **A5**, **R1**, **T**>(`callbackFunc`: function, `selector`: [Function1](_functions_.md#function1)‹R1, T›): *function*

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

▪ **selector**: *[Function1](_functions_.md#function1)‹R1, T›*

**Returns:** *function*

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›*

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

▸ (`arg1`: A1, `arg2`: A2, `arg3`: A3, `arg4`: A4, `arg5`: A5): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | A1 |
`arg2` | A2 |
`arg3` | A3 |
`arg4` | A4 |
`arg5` | A5 |

___

### `Const` brotliCompress

▸ **brotliCompress**(`options`: BrotliOptions): *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions | {} |

**Returns:** *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

___

### `Const` brotliDecompress

▸ **brotliDecompress**(`options`: BrotliOptions): *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions | {} |

**Returns:** *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

___

### `Const` createDisposableNodeStream

▸ **createDisposableNodeStream**<**T**>(`stream`: T): *[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹T›*

**Type parameters:**

▪ **T**: *Readable | Writable | Transform*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | T |

**Returns:** *[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹T›*

___

### `Const` createReadableFlowable

▸ **createReadableFlowable**(`factory`: [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Readable››): *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Readable›› |

**Returns:** *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›*

___

### `Const` createWritableFlowableSink

▸ **createWritableFlowableSink**(`factory`: [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Writable››): *[FlowableSinkLike](../interfaces/_flowable_.flowablesinklike.md)‹Uint8Array›*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Writable›› |

**Returns:** *[FlowableSinkLike](../interfaces/_flowable_.flowablesinklike.md)‹Uint8Array›*

___

### `Const` deflate

▸ **deflate**(`options`: ZlibOptions): *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ZlibOptions | {} |

**Returns:** *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

___

### `Const` gunzip

▸ **gunzip**(`options`: ZlibOptions): *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ZlibOptions | {} |

**Returns:** *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

___

### `Const` gzip

▸ **gzip**(`options`: ZlibOptions): *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ZlibOptions | {} |

**Returns:** *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

___

### `Const` inflate

▸ **inflate**(`options`: ZlibOptions): *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | ZlibOptions | {} |

**Returns:** *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

___

### `Const` transform

▸ **transform**(`factory`: [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Transform››): *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*

**Parameters:**

Name | Type |
------ | ------ |
`factory` | [Factory](_functions_.md#factory)‹[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹Transform›› |

**Returns:** *[FlowableFunction](_flowable_.md#flowablefunction)‹Uint8Array, Uint8Array›*
