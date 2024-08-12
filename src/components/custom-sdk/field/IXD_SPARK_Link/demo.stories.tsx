import { withKnobs } from '@storybook/addon-knobs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IxdSparkLink from './index';

export default {
  title: 'IxdSparkLink',
  decorators: [withKnobs],
  component: IxdSparkLink,
  args: {
    value: 'http://test-url.test',
    text: 'LinkURL',
    variant: 'link'
  },
  argTypes: {
    variant: {
      options: ['link', 'text', 'primary', 'secondary', 'simple'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof IxdSparkLink>;

const Template: ComponentStory<typeof IxdSparkLink> = args => {
  return <IxdSparkLink {...args} />;
};

export const DefaultLink = Template.bind({});
DefaultLink.args = { ...DefaultLink.args };

export const TextLink = Template.bind({});
TextLink.args = { ...TextLink.args, variant: 'text' };

export const PrimaryLink = Template.bind({});
PrimaryLink.args = { ...PrimaryLink.args, variant: 'primary' };

export const SecondaryLink = Template.bind({});
SecondaryLink.args = { ...SecondaryLink.args, variant: 'secondary' };

export const SimpleLink = Template.bind({});
SimpleLink.args = { ...SimpleLink.args, variant: 'simple' };
