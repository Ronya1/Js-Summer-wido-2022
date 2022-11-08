const { expect } = require("chai");

describe('Review session', () => {
    it('Sample for eql vs equal', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];

        expect(arr1, 'Arrays are not identical').to.eql(arr2);

        expect(arr1, 'Arrays are not identical').to.equal(arr2);

    });

});