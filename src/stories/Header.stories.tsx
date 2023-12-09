import type { Story } from "@ladle/react";
import { Header } from "./Header";

type StoryType = Story<React.ComponentProps<typeof Header>>;

const HeaderStory: StoryType = (props) => <Header {...props} />;
HeaderStory.storyName = "Header";

export const LoggedIn = HeaderStory.bind({});
LoggedIn.args = {
  user: { name: "Jane Doe" },
};

export const LoggedOut = HeaderStory.bind({});
