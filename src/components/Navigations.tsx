import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Vids from "../Vids";

function Navigations({
  radioValue,
  setRadioValue,
  isMobile,
}: {
  radioValue: string;
  setRadioValue: (radioValue: string) => void;
  isMobile: boolean
}) {
  return (
    <ButtonGroup className={isMobile ? "d-grid gap-2" : ""}>
      {Vids.map(({ id, name, vidid }) => (
        <ToggleButton
          key={id}
          id={`radio-${vidid}`}
          type="radio"
          variant="outline-success"
          name="radio"
          value={vidid}
          checked={radioValue === vidid}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default Navigations;
