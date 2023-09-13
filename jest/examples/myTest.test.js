const houseForSale = {
  bath: true,
  bedroom: 5,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
  },
};

const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    wallColor: expect.stringMatching(/white|yellow/),
  },
};

test("the house that i am looking for", () => {
  expect(houseForSale).toMatchObject(desiredHouse);
});
