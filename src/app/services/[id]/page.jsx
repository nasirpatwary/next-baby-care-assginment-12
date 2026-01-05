import { getGingleService } from "@/actions/server/services";
import DetailsCard from "./_component/DetailsCard";

// export async function generateMetadata({ params }) {
//   const { id } = await params;
//  const service = await getGingleService(id);
//   const serviceTitle = service?.service_name; 
//   const providerName = service?.caregiver_name; 
//   const description = `${service?.description} provides specialized elderly care, mobility support, and light physiotherapy in Uttara, Dhaka.`;

//   return {
//     title: `${serviceTitle} by ${providerName}`,
//     description: description,
//     applicationName: 'Care.xyz',
//     // গুরুত্বপূর্ণ: metadataBase না থাকলে অনেক সময় বিল্ড এরর দেয়
//     metadataBase: new URL('http://localhost:3000'),

//     keywords: [
//       'Elderly Care',
//       'Physiotherapy at Home',
//       'Mobility Support Specialist',
//       'Caregiver in Dhaka',
//       'Professional Nurse Profile'
//     ],

//     openGraph: {
//       title: `${serviceTitle} | Care.xyz`,
//       description: description,
//       url: `services/${id}`,
//       siteName: 'Care.xyz',
//       type: 'article',
//       images: [
//         {
//           url: 'https://i.ibb.co.com/5g9rFPDj/Screenshot-2.png',
//           width: 1200,
//           height: 630,
//           alt: `Medical Care Service by ${providerName}`,
//         },
//       ],
//     },

//     twitter: {
//       card: 'summary_large_image',
//       title: `${serviceTitle} - ${providerName}`,
//       description: description,
//       images: [service.image || 'https://i.ibb.co.com/5g9rFPDj/Screenshot-2.png'],
//     },
//   };
// }


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