import { Button } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import { FormFields } from "~/components/FormFields/FormFields";
import { NavButtons } from "~/components/NavButtons/NavButtons";
import type { FormType } from "~/constants/forms";
import { SearchParams } from "~/constants/location";
import { ThemeProvider } from "~/contexts/ThemeProvider/ThemeProvider";
import { formFields } from "~/mocks/formQuestions";
import styles from "./FormPreview.module.css";

export const FormPreview = ({ formId }: { formId?: FormType["id"] }) => {
	const [step, setStep] = useState(0);

	const isFirstStep = step === 0;
	const isLastStep = step === formFields.length - 1;

	const goToPreviousStep = () => {
		if (isFirstStep) return;

		setStep((step) => step - 1);
	};

	const goToNextStep = () => {
		if (isLastStep) return;

		setStep((step) => step + 1);
	};

	const handleSubmit = () => {
		console.log("submit");
	};

	const getHref = () => {
		if (formId) {
			const blockId = history.state?.blockId;
			const search = blockId ? `?${SearchParams.BLOCK_ID}=${blockId}` : "";

			return `/forms/${formId}/create${search}`;
		}

		return "/";
	};

	return (
		<ThemeProvider>
			<div className={styles.root}>
				<FormFields
					step={step}
					questions={formFields}
					onSubmit={handleSubmit}
					goToNextStep={goToNextStep}
				/>

				<Button
					color="dark.7"
					leftSection={<IconX />}
					className={styles.exitButton}
					component="a"
					href={getHref()}
				>
					Exit preview
				</Button>

				<NavButtons
					className={styles.navigation}
					isPrevDisabled={isFirstStep}
					isNextDisabled={isLastStep}
					onClickPrev={goToPreviousStep}
					onClickNext={goToNextStep}
				/>
			</div>
		</ThemeProvider>
	);
};
