import { Button } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";

type PreviewButtonProps = {
	onClickPreview: () => void;
};

export const PreviewButton = ({ onClickPreview }: PreviewButtonProps) => {
	return (
		<Button
			variant="default"
			color="dark.7"
			leftSection={<IconEye />}
			onClick={onClickPreview}
		>
			Preview
		</Button>
	);
};
