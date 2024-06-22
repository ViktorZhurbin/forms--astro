import { Modal } from "@mantine/core";
import { Preview } from "../Preview/Preview";

type PreviewModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const PreviewModal = ({ isOpen, onClose }: PreviewModalProps) => {
	return (
		<Modal
			fullScreen
			withCloseButton={false}
			opened={isOpen}
			onClose={onClose}
			padding={0}
			transitionProps={{ transition: "fade", duration: 200 }}
		>
			<Preview onClickExit={onClose} />
		</Modal>
	);
};
