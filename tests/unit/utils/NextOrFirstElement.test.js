/* eslint-disable prettier/prettier */
import NextOrFirstElement from "@/utils/NextOrFirstElement";

describe("NextOrFirstElement", () => {
  it("locates elements in list and returns the next element in list", () => {
    const list = ["a", "b", "c", "d", "e"];
    const currentItem = "d";
    const result = NextOrFirstElement(list, currentItem);
    expect(result).toBe("e");
  });

  it("returns first element in list if we've reached the end of the list", () => {
    const list = ["a", "b", "c", "d", "e"];
    const currentItem = "e";
    const result = NextOrFirstElement(list, currentItem);
    expect(result).toBe("a");
  });
});
