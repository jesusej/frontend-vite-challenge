import type { Meta, StoryObj } from '@storybook/react-vite';

import InvoiceForm from './InvoiceForm';

const meta = {
  component: InvoiceForm,
} satisfies Meta<typeof InvoiceForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};