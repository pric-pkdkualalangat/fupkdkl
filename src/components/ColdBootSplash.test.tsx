import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ColdBootSplash } from './ColdBootSplash';

describe('ColdBootSplash Component', () => {
  it('renders Palmedex branding and default loading status', () => {
    render(<ColdBootSplash />);

    expect(screen.getByText(/Palme/i)).toBeInTheDocument();
    expect(screen.getByText(/dex/i)).toBeInTheDocument();
    expect(screen.getByText(/Medication Reference Tool • PKD Kuala Langat/i)).toBeInTheDocument();
    expect(screen.getByText(/Initializing clinical medication database.../i)).toBeInTheDocument();
    expect(screen.getByAltText(/Palmedex Emblem/i)).toBeInTheDocument();
  });

  it('renders custom status message when provided', () => {
    render(<ColdBootSplash message="Syncing updated formulary..." />);

    expect(screen.getByText('Syncing updated formulary...')).toBeInTheDocument();
  });

  it('has accessible status attributes for screen readers', () => {
    render(<ColdBootSplash />);

    const statusContainer = screen.getByRole('status');
    expect(statusContainer).toHaveAttribute('aria-live', 'polite');
    expect(statusContainer).toHaveAttribute('aria-label', 'Loading Palmedex application');
  });
});
