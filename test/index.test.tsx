// @vitest-environment jsdom
import { render, screen } from "@testing-library/react"
import { it } from "vitest"
import { ExampleCard } from "@/lib/ExampleCard";

describe("Sanity Checks", function () {
  it('should be able to run a test', function() {
    expect(true).toBe(true);
  });
  
  it.fails("should be able to expect a test to fail", () => {
        expect(false).toBe(true)
    })
})

describe('', function() {
  it('should render ExampleCard', function() {
    render(<ExampleCard title="Example Component" img={ {"src": "", "alt": ""} } />)
    
    const card = screen.getByTestId('example-card')
    expect(card).toBeInTheDocument();
  });
});
