import { S3ClientConfig } from "@aws-sdk/client-s3";

export const s3ClientConfig: S3ClientConfig = {
  endpoint: "https://nyc3.digitaloceanspaces.com",
  forcePathStyle: false,
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
};
