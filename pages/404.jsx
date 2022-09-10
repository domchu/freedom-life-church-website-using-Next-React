import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/index">
        <a>Go back home</a>
      </Link>
    </>
  );
}
