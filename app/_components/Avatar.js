import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Avatar() {
  const session = await auth();

  if (session?.user?.image) {
    return (
      <>
        <span>Guest area</span>
        <div className="relative w-10 h-10">
          <Image
            className="rounded-full h-8 object-cover"
            fill
            src={session.user.image}
            alt={session.user.name}
            referrerPolicy="no-referrer"
          />
        </div>
      </>
    );
  }
  return <span>Guest area</span>;
}
