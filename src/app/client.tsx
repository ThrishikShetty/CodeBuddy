"use client";
import { useTRPC } from "@/trcp/client";
import { useSuspenseQuery } from "@tanstack/react-query";


export const Client = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: "Antonio PREFETCH" }));
  
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};