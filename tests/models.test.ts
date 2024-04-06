import { createEmailAction, createFlow } from '../src/models';


describe('createEmailAction', () => {
  it('creates an email action with the correct properties', () => {
    const action = createEmailAction('Welcome!', 'Need some socks?', 7200000);
    expect(action).toEqual({
      subject: 'Welcome!',
      body: 'Need some socks?',
      delayBeforeSending: 7200000,
    });
  });
});

describe('createFlow', () => {
  it('creates a flow and adds actions correctly', () => {
    const flow = createFlow('websiteSignup');
    const action = createEmailAction('Welcome!', 'Need some socks?', 7200000);
    flow.addAction(action);

    expect(flow.eventName).toBe('websiteSignup');
    expect(flow.actions).toContain(action);
  });
});
