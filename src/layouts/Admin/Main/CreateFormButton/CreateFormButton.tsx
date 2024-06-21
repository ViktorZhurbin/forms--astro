import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export const CreateFormButton = () => {
	return (
		<Button leftSection={<IconPlus />} component="a" href="/forms/id/create">
			Create form
		</Button>
	);
};
