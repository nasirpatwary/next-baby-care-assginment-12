import { getGingleService } from "@/actions/server/services";
import DetailsCard from "./_component/DetailsCard";

const ServiceDetails = async ({params}) => {
  const {id} = await params
  try {
    const service = await getGingleService(id)
    if (!service) {
            return <div>Service not found</div>;
        }
        return (
            <>
               <DetailsCard service={service} />
            </>
        );
  } catch (error) {
    console.error("Failed to load service:", error);
        return <div>Error loading service data.</div>;
  }
}

export default ServiceDetails