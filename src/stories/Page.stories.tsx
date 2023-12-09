import type { Story } from "@ladle/react";
import { Page } from "./Page";

type StoryType = Story<React.ComponentProps<typeof Page>>;

export const PageStory: StoryType = (props) => <Page {...props} />;
PageStory.storyName = "Page";
