"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "nl",
    label: "Dutch",
  },
  {
    value: "en",
    label: "English",
  },
  {
    value: "fr",
    label: "French",
  },
  {
    value: "de",
    label: "German",
  },
  {
    value: "be",
    label: "Belgium",
  },
  {
    value: "es",
    label: "Spanish",
  },
  {
    value: "it",
    label: "Italian",
  },
  {
    value: "pt",
    label: "Portuguese",
  },
  {
    value: "pl",
    label: "Polish",
  },
  {
    value: "ru",
    label: "Russian",
  },
  {
    value: "tr",
    label: "Turkish",
  },
  {
    value: "ar",
    label: "Arabic",
  }
]

export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-[232px] mt-4"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[232px] p-0">
        <Command>
          <CommandInput placeholder="Search Language..." />
          <CommandEmpty>Language not found.</CommandEmpty>
          <CommandGroup className="max-h-[270px] overflow-y-scroll">
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
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
        </Command>
      </PopoverContent>
    </Popover>
  )
}
