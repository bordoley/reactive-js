import { getDefaultScheduler, registerDefaultScheduler } from "../src/index";

describe("Scheduler", () => {
  describe("getDefaultScheduler", () => {
    test("throws when no default scheduler is defined", () => {
      expect(() => getDefaultScheduler()).toThrowError();
    });
    test("returns the registered default scheduler", () => {
      const scheduler = {} as any;
      registerDefaultScheduler(scheduler);
      const defaultScheduler = getDefaultScheduler();

      expect(defaultScheduler).toEqual(scheduler);
    });
  });

  describe("registerDefaultScheduler", () => {
    test("throws when attempting to set another scheduler", () => {
      expect(() => registerDefaultScheduler({} as any)).toThrowError();
    });
  });
});
