// Endpoint example, it's no more needed in App router sturcture, but it's a good example of how to use the data-service
// The file must be in the folder of the endpoint that doesnt include page.js file, in this case, it's in the folder api/cabins/[cabinId]
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getSettings(),
      getBookedDatesByCabinId(cabinId),
      getCabin(cabinId),
    ]);
    return Response.json({ cabin, bookedDates, cabinId });
  } catch (e) {
    return Response.json("Error fetching data");
  }
}
// export async function POST(){} ,PUT, DELETE, PATCH
