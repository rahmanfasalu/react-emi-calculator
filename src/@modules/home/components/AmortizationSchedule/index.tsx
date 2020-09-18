import React, { memo, useState } from "react";
import { EmiInfo } from "src/interfaces/emi.info";
import styled from "styled-components";
import { getMortageDetails } from "src/utils/loanUtil";
import { PieChart } from "src/shared";
import Theme from "src/theme/theme";

interface AmortizationScheduleType {
  emiInfo: EmiInfo;
  year: number;
  amount: number;
}
const AmortizationSchedule = ({
  emiInfo,
  year,
  amount,
}: AmortizationScheduleType) => {
  const { schedules } = getMortageDetails(emiInfo, amount, year);
  return (
    <>
      {schedules && (
        <Table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Opening Balance</th>
              <th>EMI*12</th>
              <th>Interest paid yearly</th>
              <th>Principal paid yearly</th>
              <th>Closing Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule: any) => (
              <AmortizationRow {...schedule} key={schedule.year} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

function AmortizationRow(schedule: any): JSX.Element {
  return (
    <tr>
      <td>{schedule.year}</td>
      <td>{schedule.openingBalance}</td>
      <td>{schedule.emi}</td>
      <td>{schedule.intrestPerYear}</td>
      <td>{schedule.principalPaid}</td>
      <td>{schedule.closingBalance < 10 ? 0 : schedule.closingBalance}</td>
    </tr>
  );
}
const Table = styled.table`
  thead {
    background: #ecf1f4;
    th {
      margin: 0;
      padding: 20px;
      border: 1px solid #ecf1f4;
    }
  }

  tbody {
    td {
      text-align: center;
      padding: 15px;
      border: 1px solid #ccc;
    }
  }
`;
export default AmortizationSchedule;
