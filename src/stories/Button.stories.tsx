import type { StoryDefault, Story } from "@ladle/react";
import { Button } from "./Button";

type StoryType = Story<React.ComponentProps<typeof Button>>;

const ButtonStory: StoryType = (props) => <Button {...props} />;
ButtonStory.storyName = "Button";

export default {
  args: {
    primary: false,
    size: "medium",
    label: "Button",
  },
  argTypes: {
    backgroundColor: {
      control: {type: "color"},
    },
    size: {
      control: {type: "select"},
      options: ["small", "medium", "large"],
    },
  }
} satisfies StoryDefault

export const Primary = ButtonStory.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = ButtonStory.bind({});

export const Large = ButtonStory.bind({});
Large.args = {
  size: "large",
};

export const Small = ButtonStory.bind({});
Small.args = {
  size: "small",
};
