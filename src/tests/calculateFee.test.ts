import { calculateFee } from "../functions/calculateFee";

describe("calculateFee", () => {
    it("should calculate the correct fee including friday rush fee", () => {
        const e = { preventDefault: jest.fn() };
        const cartValue = 30;
        const distance = 2000;
        const numItems = 10;
        const orderTime = new Date("2023-02-24T15:00:00.000Z");
        const setFee = jest.fn();

        calculateFee(e, cartValue, distance, numItems, orderTime, setFee);

        expect(e.preventDefault).toHaveBeenCalled();
        expect(setFee).toHaveBeenCalledWith(8.4);
    });

    it("should apply the max fee of 15", () => {
        const e = { preventDefault: jest.fn() };
        const cartValue = 50;
        const distance = 10000;
        const numItems = 20;
        const orderTime = new Date("2023-03-27T15:00:00.000Z");
        const setFee = jest.fn();

        calculateFee(e, cartValue, distance, numItems, orderTime, setFee);

        expect(e.preventDefault).toHaveBeenCalled();
        expect(setFee).toHaveBeenCalledWith(15);
    });

    it("should apply the free delivery starting at 100€", () => {
        const e = { preventDefault: jest.fn() };
        const cartValue = 100;
        const distance = 2000;
        const numItems = 10;
        const orderTime = new Date("2023-02-27T15:00:00.000Z");
        const setFee = jest.fn();

        calculateFee(e, cartValue, distance, numItems, orderTime, setFee);

        expect(e.preventDefault).toHaveBeenCalled();
        expect(setFee).toHaveBeenCalledWith(0);
    });
});
