import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'

const meta: Meta<typeof Box> = {
  title: 'DesignSystem/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    display: 'flex',
    padding: 'm',
    backgroundColor: 'dgray100',
    borderRadius: 'm',
  },
}

export default meta

type Story = StoryObj<typeof Box>

export const Playground: Story = {
  args: {
    children: '기본 박스',
  },
}

export const ColumnLayout: Story = {
  args: {
    flexDirection: 'column',
    gap: 's',
    children: (
      <>
        <Box backgroundColor="blue300" padding="xxs">
          첫 번째
        </Box>
        <Box backgroundColor="blue300" padding="xxs">
          두 번째
        </Box>
      </>
    ),
  },
}

export const ResponsiveBox: Story = {
  args: {
    display: ['block', 'flex'],
    flexDirection: ['column', 'row'],
    gap: 'm',
    children: (
      <>
        <Box backgroundColor="blue300" padding="m">
          Mobile
        </Box>
        <Box as="button" backgroundColor="blue300" color="white" padding="m" href="sss">
          Desktop
        </Box>
      </>
    ),
  },
}
