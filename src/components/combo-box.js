import * as React from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const Combobox = ({ frameworks, field, placeholder, onChange, variant }) => {
    const [open, setOpen] = React.useState(false);
    const { value } = field;
    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                <Button
                    variant={variant || "outline"}
                    role="combobox"
                    className="w-full justify-between text-muted-foreground"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : placeholder || "Select option..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    onSelect={() => {
                                        if (onChange)
                                            onChange(framework.value);
                                        else
                                            field?.onChange(framework.value);
                                        setOpen(false);
                                    }}
                                    className={cn(`hover:bg-muted ${value === framework.value && 'bg-accent text-accent-foreground'}`)}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export { Combobox };