import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";

const SMALL = 3;
const MEDIUM = 6;

async function CabinList({ filter }) {
  // noStore() tells Next.js to not cache the result of this function, making the route dynamic (but wrapped in Suspense, so it's not spread across the entire page, so it's dinamic hole)
  noStore();

  const cabins = await getCabins();
  if (!cabins.length) return null;

  let displayedCabins;

  switch (filter) {
    case "all":
      displayedCabins = cabins;
      break;
    case "small":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= SMALL);
      break;
    case "medium":
      displayedCabins = cabins.filter(
        (cabin) => cabin.maxCapacity <= MEDIUM && cabin.maxCapacity > SMALL
      );
      break;
    case "large":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity > MEDIUM);
      break;
    default:
      displayedCabins = cabins;
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
