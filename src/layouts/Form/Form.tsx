import { useDisclosure } from "@mantine/hooks";
import { ThemeProvider } from "~/contexts/ThemeProvider/ThemeProvider";
import { Builder } from "./Builder/Builder";
import { PreviewModal } from "./PreviewModal/PreviewModal";

export const Form = () => {
	const [isOpen, modal] = useDisclosure(false);

	return (
		<ThemeProvider>
			<Builder onClickPreview={modal.open} />

			<PreviewModal isOpen={isOpen} onClose={modal.close} />
		</ThemeProvider>
	);
};
