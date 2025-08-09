"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trcp/client";
import { useMutation } from "@tanstack/react-query";

const Page =  () => {
  const trcp = useTRPC();
  const invoke = useMutation(trcp.invoke.mutationOptions({}));


  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button onClick={() => invoke.mutate({ text: "Test" })}>
        Invoke Inngest Function

      </Button>
    </div>
  );
};
export default Page;