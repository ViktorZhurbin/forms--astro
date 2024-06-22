import { Button } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { SearchParams } from "~/constants/location";

export const PreviewButton = () => {
	const getOpenPreviewPath = () => {
		const url = new URL(window.location.href);
		url.searchParams.set(SearchParams.PREVIEW, "1");

		return `${url.pathname}${url.search}`;
	};

	return (
		<Button
			variant="default"
			color="dark.7"
			leftSection={<IconEye />}
			component="a"
			href={getOpenPreviewPath()}
		>
			Preview
		</Button>
	);
};
