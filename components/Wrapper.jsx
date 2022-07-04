import { AppProvider } from "../context/AppContext";
import Meta from "./Meta";

const Wrapper = ({ children }) => {
	return (
		<AppProvider>
			<Meta />
			{children}
		</AppProvider>
	);
};

export default Wrapper;
