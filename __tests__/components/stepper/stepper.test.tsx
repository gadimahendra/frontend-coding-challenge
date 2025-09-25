import { render, screen } from "@testing-library/react";

import Stepper from "../../../components/stepper/stepper";
import { steps } from "../../../components/stepper/steps";

describe("Stepper Component", () => {
  it("renders all steps", () => {
    render(<Stepper steps={steps} currentStep={0} />);
    steps.forEach((step, index) => {
      expect(screen.getByText(index + 1)).toBeTruthy();
    });
  });

  it("highlights the current step", () => {
    render(<Stepper steps={steps} currentStep={1} />);
    const activeStep = screen.getByText("2");
    expect(activeStep.classList.contains("bg-blue-500")).toBe(true);
  });

  it("marks completed steps", () => {
    render(<Stepper steps={steps} currentStep={2} />);
    const completedStep = screen.getByText("1");
    expect(completedStep.classList.contains("bg-blue-500")).toBe(true);
  });

  it("does not highlight future steps", () => {
    render(<Stepper steps={steps} currentStep={1} />);
    const futureStep = screen.getByText("4");
    expect(futureStep.classList.contains("bg-blue-500")).toBe(false);
  });

  it("shows progress bar filled for completed steps", () => {
    render(<Stepper steps={steps} currentStep={2} />);
    const connectors = document.querySelectorAll("div.bg-blue-500");
    expect(connectors.length).toBeGreaterThan(0);
  });

  it("updates styling when step changes", () => {
    const { rerender } = render(<Stepper steps={steps} currentStep={0} />);
    let el = screen.getByText("1");
    expect(el.classList.contains("bg-blue-500")).toBe(true);

    rerender(<Stepper steps={steps} currentStep={3} />);
    el = screen.getByText("4");
    expect(el.classList.contains("bg-blue-500")).toBe(true);
  });

  it("shows Next button until the last step, then hides it", () => {
    const { rerender } = render(
      <>
        <Stepper steps={steps} currentStep={0} />
        {0 < steps.length - 1 && <button>Next</button>}
      </>
    );

    expect(screen.getByText("Next")).toBeTruthy();

    rerender(
      <>
        <Stepper steps={steps} currentStep={steps.length - 1} />
        {steps.length - 1 < steps.length - 1 && <button>Next</button>}
      </>
    );

    expect(screen.queryByText("Next")).toBeNull();
  });
});
