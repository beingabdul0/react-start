import { TextBox, TextBoxChangeEvent } from "@progress/kendo-react-inputs";
interface Props {
  value?: string;
  placeHolder: string;
}

function KendoEmailInput(props: Props) {
  return (
    <>
      <TextBox
        className="m1"
        value={props.value}
        type="email"
        placeholder={props.placeHolder}
      />
    </>
  );
}
export default KendoEmailInput;
