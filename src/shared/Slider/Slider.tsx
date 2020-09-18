import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Theme from "src/theme/theme";

interface SliderProps {
  effect?: boolean;
  min: number;
  max: number;
  label: string;
  initialValue?: number;
  onChangeCallback: React.Dispatch<React.SetStateAction<any | undefined>>;
}
function Slider({
  effect,
  min,
  max,
  label,
  initialValue,
  onChangeCallback,
}: SliderProps) {
  const [value, setValue] = useState<number>(initialValue ?? min);

  // Slider change
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dValue = +e.target.value.replace(/\D/, "");
    setValue(dValue);
  };

  useEffect(() => {
    if (value > max) {
      onChangeCallback(max);
    } else if (value < min) {
      onChangeCallback(min);
    } else {
      onChangeCallback(value);
    }
  }, [value]);

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  return (
    <>
      <SliderHeader>
        <div className="label">{label}</div>
        <div className="input">
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            pattern="[0-9]*"
          />
        </div>
      </SliderHeader>
      <Styles opacity={effect ? (value > 10 ? value / 3000 : 0.1) : 1}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className="slider"
          onChange={handleOnChange}
        />
        <div className="value">{value}</div>
      </Styles>
    </>
  );
}

const sliderThumbStyles = ({ opacity }: { opacity: number }) => `
    width: 25px;
    height: 25px;
    background: ${Theme.colors.red};
    cursor: pointer;
    opacity: ${opacity};
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius:25px;
  `;

const SliderHeader = styled.div`
  display: flex;
  margin: 0 auto;
  .label {
    flex: 6;
    font-size: 14px;
    padding-left: 15px;
  }
  .input {
    flex: 1;
    color: ${Theme.colors.red};
    margin-right: 10px;
    input {
      background: none;
      border-bottom: 1px solid ${Theme.colors.primary};
      border-radius: 0;
    }
  }
  .spacer {
    flex: 1;
  }
  .prefix,
  .suffix {
    font-size: 12px;
  }
`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 2rem;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background: #cdd6dd;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${({ opacity }: { opacity: number }) => sliderThumbStyles({ opacity })}
    }
    &::-moz-range-thumb {
      ${({ opacity }: { opacity: number }) => sliderThumbStyles({ opacity })}
    }
    &::-webkit-slider-runnable-track {
      color: green;
      -webkit-appearance: none;
    }
  }
  .prefix,
  .suffix {
    font-size: 12px;
  }
`;

export default Slider;
