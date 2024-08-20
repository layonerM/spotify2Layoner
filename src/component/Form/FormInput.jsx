import { FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap";

const FormInput = ({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  formError,
}) => {
  return (
    <>
      <FormGroup className="mt-3">
        <Label className="fw-semibold">{label}</Label>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          className=" text-white bg-black border-secondary login-social-button"
          value={value}
          onChange={onChange}
          invalid={formError ? true : false}
        />
        {name == "username" && (
          <FormText>This appears on your profile.</FormText>
        )}

        <FormFeedback>{formError}</FormFeedback>
      </FormGroup>
    </>
  );
};

export default FormInput;
