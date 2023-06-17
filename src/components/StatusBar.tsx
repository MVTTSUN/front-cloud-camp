import { css, styled } from 'styled-components';
import { useAppSelector } from '../hooks/useAppSelector';

export default function StatusBar() {
  const stepNumber = useAppSelector((state) => state.stepNumber);

  return (
    <Container>
      <LineContainer>
        <Line>
          <ActiveLine $stepNumber={stepNumber} />
        </Line>
        <StepDotContainer>
          <StepDot $isDone={stepNumber >= 1} $isProgress={stepNumber === 1} />
          <StepDot $isDone={stepNumber >= 2} $isProgress={stepNumber === 2} />
          <StepDot $isDone={stepNumber >= 3} $isProgress={stepNumber === 3} />
        </StepDotContainer>
      </LineContainer>
      <LabelsContainer>
        <Label $isDone={stepNumber >= 1}>1</Label>
        <Label $isDone={stepNumber >= 2}>2</Label>
        <Label $isDone={stepNumber >= 3}>3</Label>
      </LabelsContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 66px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: 540px) {
    margin-bottom: 33px;
  }
`;

const LineContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 16px;
`;

const Line = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const ActiveLine = styled.div<{ $stepNumber: number }>`
  height: 100%;
  width: calc(100% / 2 * ${({ $stepNumber }) => $stepNumber - 1});
  background: #5558fa;
  border-radius: 8px;
  transition: width 0.4s ease-in-out;
`;

const StepDotContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

const StepDot = styled.div<{ $isDone: boolean; $isProgress: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;
  background: #a6a6a6 calc(50% - 0.4px) calc(50% + 0.4px);
  border-radius: 50%;
  transition: background 0.4s ease-in-out;

  ${({ $isDone }) =>
    $isDone &&
    css`
      background: url(./img/check.svg) no-repeat calc(50% - 1px) calc(50% + 1px)
        #5558fa;
    `}

  ${({ $isProgress }) =>
    $isProgress &&
    css`
      background: url(./img/inProgress.svg) no-repeat calc(50%) calc(50%)
        #5558fa;
    `}
`;

const LabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.p<{ $isDone: boolean }>`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: ${({ $isDone }) => ($isDone ? '#5558fa' : '#666')};
`;
