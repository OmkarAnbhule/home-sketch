const { FormItem, FormLabel, FormField, FormMessage, FormControl } = require("./form");
const { AirbnbSlider, AirbnbThumbComponent } = require("./progress.bar");
const { RadioGroup, RadioGroupItem } = require("./radio-group");

export const ProgressBarComponent = ({ field, form }) => {
    return (
        <div>
            <div className="w-full flex gap-3">
                <div className="border-2 flex justify-between w-1/2 p-2 rounded-lg">
                    <p className="text-muted-foreground">Min</p>
                    <p>{field.value[0]}sq</p>
                </div>
                <div className="border-2 flex justify-between w-1/2 p-2 rounded-lg">
                    <p className="text-muted-foreground">Max</p>
                    <p>{field.value[1]}sq</p>
                </div>
            </div>
            <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                value={field.value}
                onChange={(e, val) => form.setValue(field.name, val)}
                min={600}
                max={3000}
                color="primary"
            />
        </div>
    )
}


export const RadioComponent = ({ field, options }) => {
    return (
        <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className="flex justify-start gap-4 items-center"
        >
            {
                options.map((option, idx) => (
                    <FormItem key={idx} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                            <RadioGroupItem value={option.value} />
                        </FormControl>
                        <FormLabel className="">
                            {option.label}
                        </FormLabel>
                    </FormItem>
                ))
            }
        </RadioGroup>
    );
};

export const CheckboxComponent = ({ form, options, field }) => {
    return (
        <div className="flex justify-around items-center w-full h-fit py-2">
            {options.map((option) => (
                <div key={option.value} className="w-10 h-10 flex justify-center items-center">
                    <input
                        className="hidden peer"
                        id={option.value}
                        type="checkbox"
                        checked={field.value.includes(option.value)}
                        onChange={(e) => {
                            const newValue = e.target.checked
                                ? [...field.value, option.value]
                                : field.value?.filter((val) => val !== option.value);
                            form.setValue(field.name, newValue);
                        }}
                    />
                    <label htmlFor={option.value} className=" cursor-pointer transition-all duration-300 peer-checked:bg-black peer-checked:dark:bg-muted peer-checked:text-white hover:bg-gray-700 border-2 border-gray-300 rounded-md w-full h-full flex justify-center items-center">{option.label}</label>
                </div>
            ))}
        </div>
    );
};

export const ReusableField = ({ form, label, name, placeholder, component: Component, ...props }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-semibold font-sans">{label}</FormLabel>
                    <FormControl>
                        <Component placeholder={placeholder} form={form} field={field} {...props} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}