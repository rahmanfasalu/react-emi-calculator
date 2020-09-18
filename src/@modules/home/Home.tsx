import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "src/interfaces/app.state.type";
import LoanTypeInterface from "src/interfaces/loan.type.interface";
import { fetLoanTypes } from "src/stor/actions/loanInfoActions";
import { Select, Slider, PieChart } from "src/shared";
import { MinMax } from "src/constants/appConstants";
import { emiInformation } from "src/utils/loanUtil";
import { EmiInfo } from "src/interfaces/emi.info";
import { AmortizationSchedule, LoanInfo } from "./components";

// Module Home
const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  const {
    amountMin,
    amountMax,
    intrestMin,
    intrestMax,
    yearMax,
    yearMin,
  } = MinMax;

  // State:intrest
  const [intrest, setIntrest] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [year, setYear] = useState<number>();
  const [emiInfo, setEmiInfo] = useState<EmiInfo>();
  const [selectedLoanType, setLoanType] = useState<LoanTypeInterface>();

  // Get loan information
  const loanType: LoanTypeInterface[] = useSelector((state: AppStateType) => {
    return state.loanType;
  });

  // Fetch Station information
  useEffect(() => {
    dispatch(fetLoanTypes());
  }, [dispatch]);

  useEffect(() => {
    setIntrest(selectedLoanType?.intrest);
  }, [selectedLoanType]);

  useEffect(() => {
    if (amount && intrest && year) {
      const emiInfo: EmiInfo = emiInformation(amount, intrest, year);
      setEmiInfo(emiInfo);
    }
  }, [intrest, amount, year]);

  return (
    <HomeWrapper>
      <SectionWrapper>
        {/* loan settings section */}
        <Section>
          <Select
            options={loanType}
            label="Select Loan Type"
            onChangeCallback={setLoanType}
          />
          <Slider
            min={amountMin}
            max={amountMax}
            label={"LOAN AMOUNT (NOK)"}
            onChangeCallback={setAmount}
          ></Slider>
          <Slider
            min={yearMin}
            max={yearMax}
            label={"TENURE (YEARS)"}
            onChangeCallback={setYear}
          ></Slider>
          <Slider
            min={intrestMin}
            max={intrestMax}
            label={"INTEREST RATE (% P.A.)"}
            initialValue={intrest}
            onChangeCallback={setIntrest}
          ></Slider>
        </Section>

        {/* Loan information */}
        <Section>
          {emiInfo && year && amount && (
            <LoanInfo emiInfo={emiInfo} amount={amount} year={year} />
          )}
        </Section>
      </SectionWrapper>

      {/* Amortization Schedule */}
      <SectionWrapper>
        {emiInfo && year && amount && (
          <AmortizationSchedule emiInfo={emiInfo} year={year} amount={amount} />
        )}
      </SectionWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  margin-bottom: 70px;
  max-width: 980px;
  margin: 0 auto;
`;
const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
const Section = styled.div`
  margin: 0 50px;
  width: 40%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  .pieWrapper {
    max-width: 300px;
  }
`;

export default Home;
