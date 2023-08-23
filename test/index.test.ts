// @vitest-environment jsdom
// import { render, screen } from "@testing-library/react"
import { it } from "vitest"

describe("Sanity Checks", function () {
  it('should be able to run a test', function() {
    expect(true).toBe(true);
  });
  
  it.fails("should be able to expect a test to fail", () => {
        expect(false).toBe(true)
    })
})