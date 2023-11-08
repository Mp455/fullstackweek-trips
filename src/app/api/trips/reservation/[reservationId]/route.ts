import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params: { reservationId } }: { params: { reservationId: string } }
) {
  if (!reservationId) {
    return new Response(
      JSON.stringify({
        message: "Missing reservationId",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  await prisma.tripReservation.delete({
    where: {
      id: reservationId,
    },
  });

  return new Response(
    JSON.stringify({
      message: "Reservation deleted successfully",
    }),
    {
      status: 204, // Status de resposta para uma exclusão bem-sucedida
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
