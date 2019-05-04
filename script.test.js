const functions = require('./script');

test('test #1 is kmp correct', () => {
    const t1 = functions.kmp('as$qwe');
    expect(t1).toEqual([0, 0, 0, 0, 0, 0]);

    const t2 = functions.kmp('qwe$qweqwe');
    expect(t2).toEqual([0, 0, 0, 0, 1, 2, 3, 1, 2, 3]);

    const t3 = functions.kmp('f$ff');
    expect(t3).toEqual([0, 0, 1, 1]);

    const t4 = functions.kmp('qweq&qweqweqasdqweq');
    expect(t4).toEqual([0, 0, 0, 1, 0, 1, 2, 3, 4, 2, 3, 4, 0, 0, 0, 1, 2, 3, 4]);

    const t5 = functions.kmp('2$qwe1233123123');
    expect(t5).toEqual([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0]);
});

test('test #2 is findIndex correct', () => {
    const t1 = functions.findIndex('tyutyu', 'tyu');
    expect(t1).toEqual([0, 3]);

    const t2 = functions.findIndex('1234567890qwe', 'as');
    expect(t2).toEqual([]);
	
	const t4 = functions.findIndex('qq', 'qqq');
    expect(t4).toEqual([]);

    const t3 = functions.findIndex('asdwer123asddfgasvcbasddasxcvasd1asdasdasdasdasdasdasdaasdasdasd123asd123', 'asd');
    expect(t3).toEqual([0, 9, 20, 29, 33, 36, 39, 42, 45, 48, 51, 55, 58, 61, 67]);

    const t5 = functions.findIndex('asdadsda1sass1sdadsasasasa1sass11sadsdasd11ads1sa1sass1s1as1as1as1a1sasasasa1sas1as1sass1asava1sass11sass1sara1sass11sass1saa1111sass1', '1sass1');
    expect(t5).toEqual([8, 26, 49, 83, 94, 100, 110, 116, 128]);
});
