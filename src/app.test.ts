describe('test', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });

    it('should also pass', () => {
        expect(1 + 2).toBe(3);
    })

    it('should not pass', () => {
        expect(2 + 2).toBe(4);

    })
})