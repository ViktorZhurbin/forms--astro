import type { FormType } from "~/constants/forms";
import { Builder } from "./Builder/Builder";
import { Preview } from "./Preview/Preview";

export const Form = ({
	formId,
	isPreview,
}: { formId?: FormType["id"]; isPreview: boolean }) => {
	return isPreview ? <Preview formId={formId} /> : <Builder />;
};
