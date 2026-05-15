import { getCountries } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

interface NativeName {
  official: string;
  common: string;
}

export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
  };
}

const useGetCountries = () =>
  useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
  });

export default useGetCountries;
