import { Field, Switch, Label } from "@headlessui/react";
import React from "react";

const Toggle = ({ label, enabled, onChange }) => {
  return (
    <Field>
      <div className="flex items-center gap-x-2">
        <Label>{label}</Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-secondary-200 transition data-[checked]:bg-primary-900"
        >
          <span
            className={`-translate-x-1 group-data-[checked]:-translate-x-6 size-4 transform rounded-full bg-secondary-0 transition-transform`}
          />
        </Switch>
      </div>
    </Field>
  );
};

export default Toggle;
