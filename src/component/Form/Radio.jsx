import { FormGroup, Input, Label } from "reactstrap";

const FormRadio = ({ value, checked, handleChange }) => {
  const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
  return (
    <>
      <FormGroup check className="me-4">
        <Input
          id={value}
          name="gender"
          type="radio"
          value={value}
          className="text-white bg-black border-secondary "
          checked={checked}
          onChange={handleChange}
        />
        <Label check for="male">
          {capitalizedValue}
        </Label>
      </FormGroup>
    </>
  );
};

export default FormRadio;
