import { AppShell } from "@mantine/core";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import type { FormType } from "../../constants/forms";
import { ThemeProvider } from "@/contexts/ThemeProvider/ThemeProvider";

export const Admin = ({ forms }: { forms: FormType[] }) => {
	return (
		<ThemeProvider>
			<AppShell header={{ height: 60 }} padding="md">
				<AppShell.Header>
					<Header />
				</AppShell.Header>

				<AppShell.Main>
					<Main forms={forms} />
				</AppShell.Main>
			</AppShell>
		</ThemeProvider>
	);
};
