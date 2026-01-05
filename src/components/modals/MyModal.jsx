
import {
Modal,
ModalContent,
ModalHeader,
ModalBody,
ModalFooter,
Button,
useDisclosure,
} from "@heroui/react";
import { VscPreview } from "react-icons/vsc";

const MyModal = ({booking}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {  
  email,
  service_name,
  totalCost,
  district,
  division,
  area,
  city,
  status}
  = booking || {}
  return (
    <>
    <VscPreview  onClick={onOpen} size={20} className="cursor-pointer" />
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{service_name}</ModalHeader>
              <ModalBody>
                <p>
                 {email}
                </p>
                <p>
                  {district}
                </p>
                <p>
                  {division}
                </p>
                <p>
                  {city}
                </p>
                <p>
                  {area}
                </p>
                <p>
                  {totalCost}
                </p>
                <p>
                  {status}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default MyModal