import { AppShell, ScrollArea } from "@mantine/core";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { NavQuestions } from "./Navbar/NavQuestions/NavQuestions";
import { NavThankYou } from "./Navbar/NavThankYou/NavThankYou";

type BuilderProps = {
	onClickPreview: () => void;
};

export const Builder = ({ onClickPreview }: BuilderProps) => {
	return (
		<AppShell
			padding="md"
			header={{ height: 60 }}
			navbar={{
				width: 200,
				breakpoint: "xs",
				collapsed: { desktop: false, mobile: false },
			}}
		>
			<AppShell.Header>
				<Header onClickPreview={onClickPreview} />
			</AppShell.Header>

			<AppShell.Navbar p="sm">
				<AppShell.Section grow component={ScrollArea} scrollbars="y">
					<NavQuestions />
				</AppShell.Section>

				<AppShell.Section grow component={ScrollArea}>
					<NavThankYou />
				</AppShell.Section>
			</AppShell.Navbar>

			<AppShell.Main display="flex">
				<Main />
			</AppShell.Main>
		</AppShell>
	);
};
