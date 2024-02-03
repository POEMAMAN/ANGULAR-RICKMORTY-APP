import { Meta, StoryObj } from '@storybook/angular';

import { CharacterspageComponent } from './characterspage.component';

type ComponentWithCustomControls = CharacterspageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Characterspage',
  component: CharacterspageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Characterspage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Characterspage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
