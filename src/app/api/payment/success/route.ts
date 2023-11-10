import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(request: Request) {
  const sig = request.headers.get("stripe-signature")!;

  const text = await request.text();

  const event = stripe.webhooks.constructEvent(
    text,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET_KEY!
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;

    if (!session.id) {
      console.error("Erro ao criar a sessão:", session);
      return new NextResponse(JSON.stringify({ received: false }), {
        status: 500,
      });
    }

    try {
      await prisma.tripReservation.create({
        data: {
          startDate: new Date(session.metadata.startDate),
          endDate: new Date(session.metadata.endDate),
          userId: session.metadata.userId,
          tripId: session.metadata.tripId,
          totalPaid: Number(session.metadata.totalPrice),
          guests: Number(session.metadata.guests),
        },
      });
    } catch (error) {
      console.error("Erro ao salvar a reserva de viagens:", error);
      return new NextResponse(JSON.stringify({ received: false }), {
        status: 500,
      });
    }
  }
  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}
