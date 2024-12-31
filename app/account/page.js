import { auth } from "../_lib/auth";

export const revalidate = 0;

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  return (
    <h1 className="font-semibold text-2xl text-accent-400 mb-7">
      Hello {session.user.name}!
    </h1>
  );
}
