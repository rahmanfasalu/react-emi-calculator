import React from "react";
import styled from "styled-components";
import { EmiInfo } from "src/interfaces/emi.info";
import { PieChart } from "src/shared";
import Theme from "src/theme/theme";

const LoanInfo = ({
  emiInfo,
  amount,
  year,
}: {
  emiInfo: EmiInfo;
  amount: number;
  year: number;
}) => {
  return (
    <LoanInfoWrapper>
      <div className="pieWrapper">
        <p>Monthly Home Loan : {emiInfo.emi}</p>
        <p>Total Amount Payable : {year && emiInfo.emi * 12 * year}</p>
        <p className="yellow">Principal Amount : {amount}</p>
        <p className="red">
          Intrest Amount :{" "}
          {year && Math.round(emiInfo.monthlyIntrest * 12) * year}
        </p>

        <PieChart
          size={100}
          slices={[
            {
              color: "#f8d89f",
              value: Math.round(emiInfo.emi - emiInfo.monthlyIntrest),
            },
            {
              color: "#e22323",
              value: Math.round(emiInfo.monthlyIntrest),
            },
          ]}
        />
      </div>
    </LoanInfoWrapper>
  );
};

const LoanInfoWrapper = styled.div`
  p {
    font-size: 15px;
    font-weight: bold;
  }
  .red {
    color: ${Theme.colors.red};
  }
  .yellow {
    color: #e6a127;
  }
`;

export default LoanInfo;
