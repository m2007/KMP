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
    const t1 = functions.findIndex('qweqwe', 'qwe');
    expect(t1).toEqual([0, 3]);

    const t2 = functions.findIndex('1234567890qwe', 'as');
    expect(t2).toEqual([]);

    const t3 = functions.findIndex('asdwer123asddfgasvcbasddasxcvasd1', 'asd');
    expect(t3).toEqual([0, 9, 20, 29]);

    const t4 = functions.findIndex('qq', '');
    expect(t4).toEqual([0, 1, 2]);

    const t5 = functions.findIndex('asdqweqwerasdqweqwer3', 'qwer');
    expect(t5).toEqual([6, 16]);
});
