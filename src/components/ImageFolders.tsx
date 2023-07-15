import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { s3ClientConfig } from "@/configs/s3Config";

function getImageUrls(folderName: string): Promise<string[]> {
  const s3Client = new S3Client(s3ClientConfig);

  const params = {
    Bucket: "momentsbymandy",
    Prefix: `${folderName}/`,
  };

  const listObjects = async (): Promise<string[]> => {
    try {
      const data = await s3Client.send(new ListObjectsCommand(params));
      const objects = data.Contents;
      const imageCDNs: string[] = [];

      if (objects) {
        for (const object of objects) {
          const key = object.Key;
          const cdnUrl = `https://momentsbymandy.nyc3.cdn.digitaloceanspaces.com/${key}`;
          if (
            cdnUrl.endsWith(".jpg") ||
            cdnUrl.endsWith(".png") ||
            cdnUrl.endsWith(".jpeg") ||
            cdnUrl.endsWith(".webd")
          ) {
            imageCDNs.push(cdnUrl);
          }
        }
      }
      return imageCDNs;
    } catch (err) {
      console.log("Error", err);
      return [];
    }
  };

  return listObjects();
}

export default getImageUrls;
