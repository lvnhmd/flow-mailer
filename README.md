## Email automation service 📧

### About

This is my solution to Healthtech-1 Take Home Test

[Spec](https://healthtech1.notion.site/Healthtech-1-Engineer-Take-Home-Test-7a0cf51aa622466eb851763ebc4bf2e6)

---

### Introduction

This code initializes an Express application that automates email workflows based on user events. It defines two email flows (`welcomeFlow` and `purchaseFlow`) triggered by specific events (`websiteSignup` and `socksPurchased`, respectively). When an event is posted to the `/event` endpoint, the corresponding email actions are executed with specified delays.

---

### API Endpoint Documentation

#### POST /event

Triggers an email flow based on the specified event name.

##### Request Body

- `eventName` (string): The name of the event to trigger the email flow. Current supported events are `websiteSignup` and `socksPurchased`.
- `userEmail` (string): The email address of the user to whom the emails will be sent.

##### Responses

- `200 OK`: The request was successful, and the email flow was executed. The response body contains a simple confirmation message, "Flow executed".
- `404 Not Found`: No email flow matches the provided `eventName`. The response body contains the message, "Flow not found".

##### Example Request

```
    curl -X POST http://localhost:3000/event -H "Content-Type: application/json" -d '{"eventName":"websiteSignup", "userEmail":"pete@healthtech1.uk"}'
```

##### Example Response (200 OK)

`Flow executed`

##### Example Response (404 Not Found)

`Flow not found`

---

### Notes

- The actual sending of emails is simulated with `console.log` statements and executed after a delay specified in each email action. In a real-world application, these would be replaced with calls to an email sending service.
- The system is designed to be easily extendable with more events and corresponding email flows as needed.

---

### Usage

|         |                                                       |
| ------- | :---------------------------------------------------: |
| Clone   | `git clone https://github.com/lvnhmd/flow-mailer.git` |
| Install |                        `npm i`                        |
| Test    |                      `npm test`                       |
| Build   |                    `npm run build`                    |
| Run     |                       `npm start`                       |

---

### TODO

- [ ] Add integration tests
