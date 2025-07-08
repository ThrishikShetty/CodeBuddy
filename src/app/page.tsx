import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { getQueryClient, trpc } from "@/trcp/server";

const Page = async () =>  {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.hello.queryOptions({ text: "Antonio PREFETCH" }));
  return(
<HydrationBoundary state = { dehydrate(queryClient) } >
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
</HydrationBoundary >
)
}
export default Page;