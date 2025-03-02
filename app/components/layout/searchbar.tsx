import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="bg-gradient-to-b from-[#970020] to-[#4A010F] py-3">
      <div className="bg-white max-w-[1000px] w-[95%] mx-auto rounded-lg flex items-center py-2 px-2 sm:px-4 h-15 gap-2 sm:gap-4">
        <Search className="h-5 w-5" />
        <Input 
          type="text" 
          placeholder="Explore Bitcoin & Crypto" 
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base"
        />
        <Separator orientation="vertical" className="h-5" />
        <Button variant="default" className="bg-[linear-gradient(180deg,_#2B2534_0%,_#312D3E_49.51%,_#4E4B65_100%)] text-white cursor-pointer whitespace-nowrap text-sm sm:text-base">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
