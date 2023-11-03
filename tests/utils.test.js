import { fetchData, milliToMinuteSecond } from "../utils";

describe("fetchData", () => {
  it("should fetch data from the given url", async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const data = await fetchData(url);
    expect(data).toBeDefined();
    expect(data.userId).toBe(1);
    expect(data.id).toBe(1);
    expect(data.title).toBe("delectus aut autem");
    expect(data.completed).toBe(false);
  });
});

describe("milliToMinuteSecond", () => {
  it("should convert seconds to minutes and seconds", () => {
    const milliseconds = 61000;
    const ms = milliToMinuteSecond(milliseconds);
    expect(ms).toBe("1m 40s");
  });

  it("should return 0s if the input is 0", () => {
    const milliseconds = 0;
    const ms = milliToMinuteSecond(milliseconds);
    expect(ms).toBe("0s");
  });

  it("should return empty string if value is negative", () => {
    const milliseconds = -1000;
    const ms = milliToMinuteSecond(milliseconds);
    expect(ms).toBe("");
  });
});
