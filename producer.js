const { Queue } = require("bullmq");
const connection = {
    host: "127.0.0.1",
    port: 6379,
    // Add other options if needed, such as password
};

const notificationQueue = new Queue("email-queue", {
    connection,
});

async function init() {
    const res = await notificationQueue.add("email to shivam", {
        email: "shivam@gmail.com",
        subject: "Welcome message...",
        body: "Hey Shivam, Welcome to my empire..."

    });
    console.log("job added to queue", res.id);
}
init();