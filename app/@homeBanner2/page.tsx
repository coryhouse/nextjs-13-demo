import { sleep } from "@/utils/sleep";

export default async function HomeBanner2() {
  // Simulate a slow loading parallel route.
  await sleep(1000);
  return <h1>Home Banner 2</h1>;
}
