import { Group, TextInput } from "@mantine/core";
import { HomeButton } from "./HomeButton/HomeButton";
import { PreviewButton } from "./PreviewButton/PreviewButton";
import { PublishButton } from "./PublishButton/PublishButton";

type HeaderProps = {
	onClickPreview: () => void;
};

export const Header = ({ onClickPreview }: HeaderProps) => {
	return (
		<Group h="100%" px="md" justify="space-between">
			<Group>
				<HomeButton />
				<TextInput pointer defaultValue="My form" size="sm" />
			</Group>
			<Group>
				<PreviewButton onClickPreview={onClickPreview} />
				<PublishButton />
			</Group>
		</Group>
	);
};
