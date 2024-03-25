
type Props = {
    onCheckboxChange: (target: EventTarget & HTMLInputElement) => void;
    selectedGender: string;
};

const GenderCheckbox = ({ selectedGender, onCheckboxChange }: Props) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender == "male" && "selected"}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900" name="gender" value={'male'} checked={selectedGender == "male"} onChange={({ target }) => onCheckboxChange(target)} />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender == "female" && "selected"}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900" name="gender" value={'female'} checked={selectedGender == "female"} onChange={({ target }) => onCheckboxChange(target)} />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;