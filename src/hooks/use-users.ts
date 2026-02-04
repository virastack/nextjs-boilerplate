import { useQuery } from "@tanstack/react-query";

import { get } from "@/lib/api";

import { User } from "@/types";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: ({ signal }) => get<User[]>("/users", { signal }),
    select: (data) => data.slice(0, 5)
  });
}
