"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        onClick={() => handleFilter("all")}
        isActive={activeFilter === "all"}
      >
        All cabins
      </Button>
      <Button
        onClick={() => handleFilter("small")}
        isActive={activeFilter === "small"}
      >
        1&mdash;3 cabins
      </Button>
      <Button
        onClick={() => handleFilter("medium")}
        isActive={activeFilter === "medium"}
      >
        4&mdash;6 cabins
      </Button>
      <Button
        onClick={() => handleFilter("large")}
        isActive={activeFilter === "large"}
      >
        7&#43; cabins
      </Button>
    </div>
  );
}

function Button({ children, onClick, isActive }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        isActive ? "bg-primary-700" : ""
      } `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Filter;
