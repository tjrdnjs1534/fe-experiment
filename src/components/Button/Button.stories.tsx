import { Button, ButtonProps } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ButtonProps> = {
  title: 'DesignSystem/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outlined', 'white'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'primary',
    children: <p>버튼이름</p>,
  },
}
