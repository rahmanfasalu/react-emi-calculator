import React, { useState, useEffect } from "react";
import LoanTypeInterface from "src/interfaces/loan.type.interface";
import styled from "styled-components";
import Theme from "src/theme/theme";

function Select({
  label,
  options,
  onChangeCallback,
}: {
  label: string;
  options: LoanTypeInterface[];
  onChangeCallback: React.Dispatch<React.SetStateAction<any | undefined>>;
}): JSX.Element {
  useEffect(() => {
    onChangeCallback(options[0]);
  }, [options]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find((opt: LoanTypeInterface) => {
      return opt.id === +event.target.value;
    });
    onChangeCallback(selectedOption);
  };

  return (
    <FormStyled>
      <LabelWrapper>{label}</LabelWrapper>
      <SelectStyled onChange={handleChange}>
        {options.map((option) => {
          return (
            <option value={option.id} key={option.id}>
              {option.type}
            </option>
          );
        })}
      </SelectStyled>
    </FormStyled>
  );
}

const LabelWrapper = styled.label`
  color: ${Theme.colors.primary};
  width: 100%;
  float: left;
`;

const SelectStyled = styled.select`
  width: 250px;
  outline: none;
  border: 1px solid #ccc;
  height: 30px;
  padding: 0 4px;
  &:focus {
    outline: none;
  }
`;
const FormStyled = styled.form`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 20px;
`;

export default Select;
