import { useEffect, useMemo } from "react";
import { SearchParams } from "../../../constants/location";
import { formFields } from "../../../mocks/formQuestions";
import type { SelectedBlockId } from "../types";

export const useSelectedBlockId = () => {
	// const searchParams = new URLSearchParams(window.location.search);

	const selectedBlockId: SelectedBlockId = useMemo(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);

		return urlSearchParams.get(SearchParams.BLOCK_ID);
	}, []);

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const searchBlockId = urlSearchParams.get(SearchParams.BLOCK_ID);
		const isValidBlockId = formFields.some(({ id }) => id === searchBlockId);

		if (searchBlockId && isValidBlockId) {
			return;
		}

		const defaultBlockId = formFields[0].id;

		urlSearchParams.set(SearchParams.BLOCK_ID, defaultBlockId);
		history.replaceState({}, "", `?${urlSearchParams.toString()}`);
	}, []);

	return selectedBlockId;
};
