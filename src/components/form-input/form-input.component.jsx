import { FormInputLable , Input , Group} from './form-input.styles';

const FormInput= ({label , ...otherprops}) => {
return(
    <Group>
<Input {...otherprops}/>
    { label && (
<FormInputLable 
 shrink={otherprops.value.length}>{label}</FormInputLable>
) }
</Group>
);

};

export default FormInput;
