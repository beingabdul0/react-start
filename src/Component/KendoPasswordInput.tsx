import { TextBox, TextBoxChangeEvent } from "@progress/kendo-react-inputs";
interface Props {
  value?: string;
  placeHolder: string;
}

function KendoPasswordInput(props: Props) {
  return (
    <>
      <TextBox
        className="mt-1"
        value={props.value}
        type="password"
        placeholder={props.placeHolder}
      />
    </>
  );
}
export default KendoPasswordInput;
