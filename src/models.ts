type EmailAction = {
  subject: string;
  body: string;
  delayBeforeSending: number;
};

export type Flow = {
  eventName: string;
  actions: EmailAction[];
};

export function createEmailAction(
  subject: string,
  body: string,
  delayBeforeSending: number = 0
): EmailAction {
  return {
    subject,
    body,
    delayBeforeSending
  };
}

export function createFlow(eventName: string) {
  let actions: EmailAction[] = [];

  return {
    eventName,
    actions,
    addAction(emailAction: EmailAction) {
      actions.push(emailAction);
    }
  };
}
