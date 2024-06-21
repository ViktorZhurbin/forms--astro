import { useState } from "react";
import "./Counter.css";

export default function Counter({
	count: initialCount,
	forms,
}: {
	count: number;
	forms: any;
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	console.log({ forms });

	return (
		<>
			{forms.map((f) => (
				<div>{f.id}</div>
			))}
			<div className="counter">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
		</>
	);
}
