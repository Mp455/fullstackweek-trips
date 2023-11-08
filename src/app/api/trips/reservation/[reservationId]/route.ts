import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  _request: Request,
  { params: { reservationId } }: { params: { reservationId: string } }
): Promise<NextResponse> {
  if (!reservationId) {
    return new NextResponse(
      JSON.stringify({
        message: "Missing reservationId",
      }),
      {
        status: 400,
      }
    );
  }

  await prisma.tripReservation.delete({
    where: {
      id: reservationId,
    },
  });

  return new NextResponse(
    JSON.stringify({
      message: "Reservation deleted successfully",
    }),
    {
      status: 204,
    }
  );
}
