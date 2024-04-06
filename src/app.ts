import express, { Request, Response } from "express";
import { Flow, createEmailAction, createFlow } from "./models";

const app = express();
app.use(express.json());

const welcomeFlow = createFlow("websiteSignup");
welcomeFlow.addAction(
  createEmailAction("Welcome!", "Need some socks?", 7200000)
);

const purchaseFlow = createFlow("socksPurchased");
purchaseFlow.addAction(createEmailAction("Payment received", "Thank you!"));
purchaseFlow.addAction(createEmailAction("Socks dispatched!", "Get ready!"));

const flows: Flow[] = [welcomeFlow, purchaseFlow];

app.post("/event", async (req: Request, res: Response) => {
  const { eventName, userEmail } = req.body;
  const flow = flows.find((flow) => flow.eventName === eventName);

  if (!flow) {
    return res.status(404).send("Flow not found");
  }

  flow.actions.forEach((action) => {
    setTimeout(() => {
      console.log(`Sending email to ${userEmail}: ${action.subject}`);
    }, action.delayBeforeSending);
  });

  res.send("Flow executed\n");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
