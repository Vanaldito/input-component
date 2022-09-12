import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../component/Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    multiline: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    error: { control: { type: "boolean" } },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({
  placeholder: "Default",
});

Default.args = {
  color: "default",
  placeholder: "Placeholder",
  helperText: "Helper text",
  size: "md",
  disabled: false,
  multiline: false,
  fullWidth: false,
  error: false,
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  color: "primary",
  placeholder: "Placeholder",
  helperText: "Helper text",
  size: "md",
  disabled: false,
  multiline: false,
  fullWidth: true,
  error: false,
};

export const MultineLine = Template.bind({});

MultineLine.args = {
  color: "secondary",
  placeholder: "Placeholder",
  helperText: "Helper text",
  size: "md",
  disabled: false,
  multiline: true,
  rows: 4,
  fullWidth: false,
  error: false,
};

export const LeftIcon = Template.bind({});

LeftIcon.args = {
  color: "primary",
  placeholder: "Placeholder",
  helperText: "Helper text",
  size: "md",
  disabled: false,
  multiline: false,
  fullWidth: false,
  error: false,
  startIcon: "local_grocery_store",
};

export const RightIcon = Template.bind({});

RightIcon.args = {
  color: "primary",
  placeholder: "Placeholder",
  helperText: "Helper text",
  size: "md",
  disabled: false,
  multiline: false,
  fullWidth: false,
  error: false,
  endIcon: "local_grocery_store",
};
