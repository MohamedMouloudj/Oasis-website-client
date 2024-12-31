import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "./LoginMessage";
import { auth } from "../_lib/auth";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();
  return (
    <div className="grid grid-cols-[1.3fr_1fr] border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;