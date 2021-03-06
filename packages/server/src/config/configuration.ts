export default () => ({
  port: parseInt(process.env.PORT as string, 10) || 80,
  auth: {
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY,
    projectId: process.env.PROJECT_ID,
    webApiKey: process.env.FB_API_KEY,
  },
  db: {},
  analytics: {
    measurementId: process.env.GA_MEASUREMENT_ID,
    apiSecret: process.env.GA_API_SECRET,
  },
});
