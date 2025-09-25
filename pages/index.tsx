import Button from "../components/repareo/button";
import ButtonWrapper from "../components/repareo/buttonWrapper";
import Header from "../components/repareo/header";
import MainWrapper from "../components/repareo/mainWrapper";
import StepperWrapper from "../components/repareo/stepperWrapper";
import Stepper from "../components/stepper/stepper";
import useStepper from "../hooks/useStepper";
import { steps } from "../components/stepper/steps";
import Head from "next/head";

export default function Home() {
  const { currentStep, handleNextStep } = useStepper();

  return (
    <>
      <Head>
        <title>My App Title</title>
        <meta name="description" content="This is my app description" />
      </Head>
      <Header />
      <MainWrapper>
        <StepperWrapper>
          {/*TODO: Make sure the Stepper handles clicks on the button*/}
          <Stepper steps={steps} currentStep={currentStep} />
        </StepperWrapper>
        <ButtonWrapper>
          {currentStep < steps.length - 1 && (
            <Button onClick={handleNextStep}>Next</Button>
          )}
        </ButtonWrapper>
      </MainWrapper>
    </>
  );
}
