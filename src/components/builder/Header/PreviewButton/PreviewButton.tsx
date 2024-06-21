import { Button } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { useSelectedBlockId } from "../../hooks/useSelectedBlockId";

export const PreviewButton = () => {
	const selectedBlockId = useSelectedBlockId();

	return (
		<Button
			variant="default"
			color="dark.7"
			leftSection={<IconEye />}
			// component="a"
			onClick={() => {
				history.pushState(
					{
						state: { blockId: selectedBlockId },
					},
					"",
					"/forms/1/preview"
				);
			}}
		>
			Preview
		</Button>
	);
};
