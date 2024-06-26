import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { handleSignUp } from "@/lib/utils";
import { createUserData } from "../../../../../types";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  if (evt.type === "user.created") {
    const { id, email_addresses } = evt.data;

    // Extract primary email address
    const primaryEmailAddress = email_addresses.find(
      (email: { id: string }) => email.id === evt.data.primary_email_address_id
    );

    if (!primaryEmailAddress) {
      console.error("Primary email address not found");
      return new Response("Error occurred during user creation", {
        status: 400,
      });
    }

    const apiKey: string = process.env.YANTAR_API_KEY!;

    // Create userData object with id and email
    const userData: createUserData = {
      api_key: apiKey,
      auth_id: id,
      email: primaryEmailAddress.email_address,
    };

    try {
      // Call your function to handle sign up with user data
      await handleSignUp(userData);
      console.log("User created successfully on backend");
    } catch (error) {
      console.error("Error creating user on backend:", error);
      return new Response("Error occurred during user creation on backend", {
        status: 500,
      });
    }
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
