export const fields = ['field1', 'field2', 'field3', 'field4',].map((value, index) => {
    return {
        key: `sub${value}`,
        label: `${value}`,
        children: ['well1', 'well2', 'well3', 'well4'].map((value2, index2) => {
            return {
                key: `sub${value2} ${index}`,
                label: `${value2}`,
                children: ['core1', 'core2', 'core3', 'core4'].map((value3, index3) => {
                    return {
                        key: `sub${value3} ${index} ${index2}`,
                        label: `${value3}`,
                        children: ['item1', 'item2', 'item3', 'item4'].map((value4) => {
                            return {
                                key: `sub${value4} ${index} ${index2} ${index3}`,
                                label: `${value4}`,
                            };
                        })
                    };
                })
            };
        })
    };
})