import { type FormType, FormsLayout } from "~/constants/forms";
import { Routes } from "~/constants/location";
import { GridView } from "./GridView/GridView";
import { ListView } from "./ListView/ListView";

type FormsViewProps = {
	view: FormsLayout;
	forms: FormType[];
};

export const FormsView = ({ view, forms }: FormsViewProps) => {
	const ViewComponent = view === FormsLayout.List ? ListView : GridView;

	return <ViewComponent forms={forms} getHref={Routes.getFormPath} />;
};
